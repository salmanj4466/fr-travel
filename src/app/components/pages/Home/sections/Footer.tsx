import { ArrowRightOutlined, EnvironmentOutlined, FacebookFilled, InstagramOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined, YoutubeFilled } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact">
      <section className="home-cta relative overflow-hidden px-5 py-20 text-center text-white">
        <div className="absolute inset-0 bg-[#003f63]/78" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="home-serif text-4xl sm:text-6xl">Your spiritual journey<br /><span className="home-script text-[var(--fr-light-blue)]">starts here</span></h2>
          <p className="mt-5 text-sm text-white/80 sm:text-base">Take the first step towards a blessed Umrah journey today.</p>
          <Button href="tel:+923001234567" shape="round" size="large" className="mt-7 h-13! border-0! bg-[var(--fr-light-blue)]! px-8! font-bold! text-[var(--fr-navy)]!" icon={<ArrowRightOutlined />} iconPlacement="end">Get a Free Consultation</Button>
        </div>
      </section>
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1fr_.7fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <span className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image src="/images/WhatsApp Image 2026-08-19 at 2.23.37 PM.jpeg" alt="FR Travel logo" fill className="object-cover" sizes="80px" />
              </span>
              <div><h2 className="home-serif text-2xl">FR Travel</h2><p className="text-[9px] uppercase tracking-[0.2em]">Journey closer to faith</p></div>
            </div>
            <p className="mt-5 text-sm leading-7">Your trusted partner for Umrah travel services. We make your journey simple, safe, and spiritually enriching.</p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--fr-navy)]">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-[#6d7471]">{[["About", "/about"], ["Packages", "/#packages"], ["Why Us", "/#why-us"], ["Testimonials", "/#testimonials"]].map(([label, href]) => <a key={href} href={href} className="hover:text-[var(--fr-accent)]">{label}</a>)}</div>
          </div>
          <div>
            <h3 className="font-bold text-[var(--fr-navy)]">Contact Us</h3>
            <div className="mt-4 grid gap-3 text-sm text-[#6d7471]"><a href="tel:+923001234567"><PhoneOutlined className="mr-3 text-[var(--fr-accent)]" />+92 300 9419367</a><a href="mailto:info@frtravel.com"><MailOutlined className="mr-3 text-[var(--fr-accent)]" />info@frtravel.com</a><p><EnvironmentOutlined className="mr-3 text-[var(--fr-accent)]" />Pattoki, Pakistan</p></div>
          </div>
          <div>
            <h3 className="font-bold">Follow us</h3>
            <div className="mt-5 flex gap-3 text-xl"><a href="#" aria-label="Facebook"><FacebookFilled /></a><a href="#" aria-label="Instagram"><InstagramOutlined /></a><a href="#" aria-label="YouTube"><YoutubeFilled /></a><a href="https://wa.me/923009419367" aria-label="WhatsApp"><WhatsAppOutlined /></a></div>
           </div>
        </div>
      </section>
      <div className="bg-[#003f63] px-5 py-5 text-[11px] text-white/65 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 sm:flex-row"><p>© 2026 FR Travel. All rights reserved.</p><p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p></div></div>
    </footer>
  );
}
