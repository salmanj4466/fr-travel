import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <section id="about" className="home-section bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div className="relative min-h-[430px] sm:min-h-[540px]">
          <div className="absolute inset-y-0 left-0 w-[82%] overflow-hidden rounded-[2rem]">
            <Image src="/images/pexels-afiography-30429165.jpg" alt="Al-Masjid an-Nabawi in Madinah" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 42vw" />
          </div>
          <div className="absolute bottom-5 right-0 w-[48%] overflow-hidden rounded-3xl border-[8px] border-white shadow-2xl">
            <Image src="/images/pexels-earth-photart-2149767641-35332386.jpg" alt="Pilgrims visiting the holy mosque" width={600} height={450} className="aspect-[4/3] object-cover" />
          </div>
          <div className="absolute right-3 top-7 rounded-2xl bg-[var(--fr-navy)] px-5 py-4 text-center text-white shadow-lg">
            <strong className="home-serif block text-3xl text-[var(--fr-light-blue)]">10+</strong>
            <span className="text-[10px] uppercase tracking-widest">Years of care</span>
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="About FR Travel" title="A journey planned with" accent="heart & purpose" />
          <p className="mt-7 text-base leading-8 text-[#5e6965]">
            We believe an Umrah journey should feel peaceful from the moment you decide to travel. Our team thoughtfully manages every detail, leaving you free to focus on worship and reflection.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Clear, honest guidance", "Carefully selected hotels", "Complete visa assistance", "Support throughout your trip"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[var(--fr-navy)]"><CheckOutlined className="text-[var(--fr-accent)]" />{item}</div>
            ))}
          </div>
          <Button href="#why-us" type="link" className="mt-6 px-0! font-bold! text-[var(--fr-navy)]!" icon={<ArrowRightOutlined />} iconPlacement="end">More about our approach</Button>
        </div>
      </div>
    </section>
  );
}
