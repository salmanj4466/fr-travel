import {
  ArrowRightOutlined,
  EnvironmentFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import SectionTitle from "../../Home/SectionTitle";

const { TextArea } = Input;

const methods = [
  {
    icon: <PhoneOutlined />,
    title: "Call us",
    lines: ["+92 300 1234567", "+92 42 1234567"],
    note: "Mon – Sat (9:00 AM – 6:00 PM)",
    href: "tel:+923001234567",
  },
  {
    icon: <MailOutlined />,
    title: "Email us",
    lines: ["info@frtravel.com", "support@frtravel.com"],
    note: "We reply within 24 hours",
    href: "mailto:info@frtravel.com",
  },
  {
    icon: <EnvironmentOutlined />,
    title: "Visit our office",
    lines: ["123 Main Boulevard,", "Gulberg III, Lahore, Pakistan"],
    note: "Get directions →",
    href: "https://maps.google.com/?q=Gulberg+III+Lahore",
  },
  {
    icon: <WhatsAppOutlined />,
    title: "Chat on WhatsApp",
    lines: ["+92 300 1234567"],
    note: "Quick answers, bookings and support",
    href: "https://wa.me/923001234567",
    button: true,
  },
];

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactDetails() {
  const [form] = Form.useForm<ContactFormValues>();
  const [sent, setSent] = useState(false);

  const submit = () => {
    setSent(true);
    form.resetFields();
  };

  return (
    <section className="home-section bg-[#fbfaf7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Get in touch"
          title="Contact us"
          centered
          description="We'd love to hear from you. Reach out through any of the following channels or send us a message directly."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {methods.map((method) => (
            <article key={method.title} className="contact-method-card flex min-h-64 flex-col rounded-2xl border border-[#ede8df] bg-white p-6">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--fr-navy)] text-2xl text-white">{method.icon}</span>
              <h2 className="mt-5 text-lg font-bold capitalize text-[var(--fr-navy)]">{method.title}</h2>
              <div className="mt-2 text-sm leading-6 text-[#384c45]">{method.lines.map((line) => <p key={line}>{line}</p>)}</div>
              {method.button ? (
                <Button href={method.href} target="_blank" rel="noreferrer" className="home-primary mt-auto h-10! font-bold!" icon={<ArrowRightOutlined />} iconPlacement="end">Chat now</Button>
              ) : (
                <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-auto pt-4 text-xs font-semibold text-[#7a817e] hover:text-[var(--fr-accent)]">{method.note}</a>
              )}
            </article>
          ))}
        </div>

        <div id="message" className="mt-7 grid overflow-hidden rounded-3xl border border-[#ebe5dc] bg-white shadow-[0_18px_55px_rgba(38,50,45,.06)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <h2 className="home-serif text-4xl text-[var(--fr-navy)] sm:text-5xl">Send us a <span className="home-script text-[var(--fr-accent)]">message</span></h2>
            <p className="mt-3 text-sm text-[#67706c]">Fill out the form and our team will get back to you shortly.</p>
            <Form form={form} layout="vertical" onFinish={submit} requiredMark={false} className="contact-form mt-8">
              <div className="grid gap-x-5 sm:grid-cols-2">
                <Form.Item name="name" label="Full name" rules={[{ required: true, message: "Please enter your name" }]}><Input placeholder="Your full name" /></Form.Item>
                <Form.Item name="email" label="Email address" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}><Input placeholder="you@example.com" /></Form.Item>
                <Form.Item name="phone" label="Phone number" rules={[{ required: true, message: "Please enter your phone number" }]}><Input placeholder="Your phone number" /></Form.Item>
                <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please select a subject" }]}>
                  <Select placeholder="Select a subject" options={[{ value: "package", label: "Umrah package enquiry" }, { value: "visa", label: "Visa assistance" }, { value: "group", label: "Family or group booking" }, { value: "other", label: "Other enquiry" }]} />
                </Form.Item>
              </div>
              <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}><TextArea rows={5} placeholder="Type your message here..." /></Form.Item>
              {sent && <p role="status" className="mb-4 rounded-lg bg-[#edf7f2] px-4 py-3 text-sm font-semibold text-[var(--fr-navy)]">Thank you. Your message has been prepared successfully.</p>}
              <Button htmlType="submit" type="primary" block className="home-primary h-13! text-base! font-bold!" icon={<ArrowRightOutlined />} iconPlacement="end">Send message</Button>
            </Form>
          </div>

          <div className="border-t border-[#ebe5dc] bg-[#f7f4ed] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <h2 className="home-serif text-4xl text-[var(--fr-navy)]">Our location</h2>
            <p className="mt-3 text-sm text-[#67706c]">Visit our office or find us on the map.</p>
            <a href="https://maps.google.com/?q=Gulberg+III+Lahore" target="_blank" rel="noreferrer" className="contact-map mt-7 flex min-h-60 items-center justify-center overflow-hidden rounded-2xl border border-[#e3ded5]">
              <span className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-xl">
                <EnvironmentFilled className="text-3xl text-[#c94b3f]" />
                <span><strong className="block text-[var(--fr-navy)]">FR Travel</strong><small className="text-[#737b78]">Gulberg III, Lahore</small></span>
              </span>
            </a>
            <div className="contact-support mt-6 rounded-2xl bg-white p-6">
              <h3 className="home-serif text-2xl text-[var(--fr-navy)]">Let&apos;s make your Umrah journey special</h3>
              <p className="mt-3 text-sm leading-6 text-[#64706b]">Whether you&apos;re planning, have questions, or need personalized guidance — we&apos;re here to help.</p>
              <Button href="https://wa.me/923001234567" target="_blank" rel="noreferrer" shape="round" className="home-primary mt-5 h-11! font-bold!" icon={<WhatsAppOutlined />}>Start a conversation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
