import nodemailer from "nodemailer";
import { umrahPackages, type UmrahEnquiryValues } from "../../types/umrahEnquiry";

export const runtime = "nodejs";

const recipient = "salmannetsol6@gmail.com";
const maxBodyBytes = 16_384;
const deliveryError = "Email delivery is temporarily unavailable. Please try again later.";

// A small per-process cap prevents this public form from flooding the inbox.
// Use a shared rate limiter when deploying multiple server instances.
let emailAttempts = 0;
let windowEndsAt = 0;

function validateEnquiry(value: unknown): UmrahEnquiryValues | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const limits = { firstName: 100, lastName: 100, email: 254, phone: 30, package: 20, message: 2000 };
  const fields: Record<string, string> = {};

  for (const [key, limit] of Object.entries(limits)) {
    if (typeof input[key] !== "string") return null;
    const field = input[key].trim();
    if (!field || field.length > limit) return null;
    if (key !== "message" && /[\r\n\u0000]/.test(field)) return null;
    fields[key] = field;
  }

  if (!/^[^\s@<>,;:"]+@[a-z\d.-]+\.[a-z]{2,}$/i.test(fields.email)) return null;
  if (!/^\+?[\d\s().-]+$/.test(fields.phone)) return null;
  const phoneDigits = fields.phone.replace(/\D/g, "").length;
  if (phoneDigits < 7 || phoneDigits > 15) return null;
  if (!Object.hasOwn(umrahPackages, fields.package)) return null;

  return fields as UmrahEnquiryValues;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return Response.json({ error: "Please submit the form as JSON." }, { status: 415 });
  }

  const reader = request.body?.getReader();
  if (!reader) return Response.json({ error: "Please complete all form fields." }, { status: 400 });

  let body: unknown;
  try {
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return Response.json({ error: "Your enquiry is too long." }, { status: 413 });
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return Response.json({ error: "Unable to read your enquiry. Please try again." }, { status: 400 });
  } finally {
    reader.releaseLock();
  }

  const enquiry = validateEnquiry(body);
  if (!enquiry) {
    return Response.json({ error: "Please check all fields, including your email, phone number and package." }, { status: 400 });
  }

  const channel = (body as Record<string, unknown>).channel ?? "email";
  if (channel !== "email") {
    return Response.json({ error: "This form currently supports email enquiries only." }, { status: 400 });
  }

  const packageName = umrahPackages[enquiry.package];
  const message = [
    "A new Plan Your Umrah enquiry was submitted on the FR Travel website.",
    "",
    `First Name: ${enquiry.firstName}`,
    `Last Name: ${enquiry.lastName}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Package: ${packageName}`,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM?.trim() || user;

  if (!host || !user || !pass || !from || !Number.isInteger(port) || port < 1 || port > 65535) {
    return Response.json({ error: deliveryError }, { status: 503 });
  }

  const now = Date.now();
  if (now >= windowEndsAt) {
    emailAttempts = 0;
    windowEndsAt = now + 60_000;
  }
  if (emailAttempts >= 10) {
    return Response.json(
      { error: "We are receiving many enquiries. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((windowEndsAt - now) / 1000)) } },
    );
  }
  emailAttempts += 1;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const result = await transporter.sendMail({
      from: { name: "FR Travel", address: from },
      to: recipient,
      replyTo: { name: `${enquiry.firstName} ${enquiry.lastName}`, address: enquiry.email },
      subject: `New Umrah Enquiry — ${packageName}`,
      text: message,
    });

    if (!result.accepted?.length) throw new Error("Recipient not accepted");
    return Response.json({ success: true });
  } catch (error) {
    // Log only the error code; SMTP errors can otherwise include customer data.
    const code = error && typeof error === "object" && "code" in error ? error.code : "SEND_FAILED";
    console.error("Umrah enquiry email failed:", code);
    return Response.json({ error: deliveryError }, { status: 502 });
  } finally {
    transporter.close();
  }
}
