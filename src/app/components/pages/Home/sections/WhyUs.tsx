import { BankOutlined, DollarOutlined, SafetyCertificateOutlined, TeamOutlined } from "@ant-design/icons";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const reasons = [
  [<SafetyCertificateOutlined key="trust" />, "Trusted & experienced", "Years of expertise in serving pilgrims worldwide."],
  [<TeamOutlined key="team" />, "Personalized support", "We assist you at every step of your journey."],
  [<BankOutlined key="hotel" />, "Comfortable stay", "Handpicked hotels near the holy sites."],
  [<DollarOutlined key="price" />, "Affordable options", "Quality services at honest, competitive prices."],
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#f6f1e8]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[680px]">
          <Image src="/images/pexels-earth-photart-2149767641-35332386.jpg" alt="The Grand Mosque in Makkah" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082f28]/45 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-xs rounded-2xl border border-white/30 bg-white/15 p-5 text-white backdrop-blur-md sm:left-12">
            <p className="home-serif text-2xl">“Your comfort is part of our responsibility.”</p>
          </div>
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16">
          <div>
            <SectionTitle eyebrow="Why choose us" title="Travel with trust and" accent="peace of mind" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {reasons.map(([icon, title, description]) => (
                <div key={String(title)} className="flex gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-2xl text-[var(--fr-accent)] shadow-sm">{icon}</span>
                  <div><h3 className="font-bold capitalize text-[var(--fr-navy)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#737975]">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
