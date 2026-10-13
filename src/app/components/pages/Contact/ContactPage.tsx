"use client";

import ContactDetails from "./sections/ContactDetails";
import Header from "../Home/sections/Header";
import Footer from "../Home/sections/Footer";
import ContactHero from "./sections/ContactHero";
import "../Home/home.css";
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="home-page contact-page bg-[#fbfaf7] text-[#152a24]">
      <Header />
      <ContactHero />
      <ContactDetails />
      <Footer />
    </main>
  );
}
