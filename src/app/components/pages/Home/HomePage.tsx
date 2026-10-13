"use client";

import About from "./sections/About";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Packages from "./sections/Packages";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";
import "./home.css";

export default function HomePage() {
  return (
    <main className="home-page bg-[#fbfaf6] text-[#142a25]">
      <Header />
      <Hero />
      <About />
      <Packages />
      <Services />
      <WhyUs />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
}
