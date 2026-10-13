import type { Metadata } from "next";
import ContactPage from "../components/pages/Contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact FR Travel | Plan Your Umrah",
  description:
    "Contact FR Travel for Umrah packages, visa guidance, hotel bookings, and personalized travel support.",
};

export default function Page() {
  return <ContactPage />;
}
