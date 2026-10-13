import { ArrowRightOutlined, BankOutlined, CheckOutlined, EnvironmentOutlined, RocketOutlined } from "@ant-design/icons";
import { Button, Card, Tag } from "antd";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const packages = [
  { name: "Economy Umrah", price: "185,000", image: "/images/pexels-afiography-30429165.jpg", description: "A comfortable and affordable option for your blessed journey." },
  { name: "Standard Umrah", price: "265,000", image: "/images/pexels-earth-photart-2149767641-35332386.jpg", description: "The perfect balance of comfort, location, and value.", popular: true },
  { name: "Deluxe Umrah", price: "395,000", image: "/images/madina.jpg", description: "Premium services, elevated comfort, and greater peace of mind." },
];

export default function Packages() {
  return (
    <section id="packages" className="home-section bg-[#f7f3eb]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Choose your journey" title="Umrah Packages" />
          <p className="max-w-md text-sm leading-7 text-[#66706c]">Carefully crafted packages to suit your needs. Travel with peace of mind and focus on what truly matters — your worship.</p>
        </div>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.name} className={`package-card overflow-hidden border-0! ${item.popular ? "popular-card" : ""}`} styles={{ body: { padding: 0 } }}>
              <div className="relative h-56 overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                {item.popular && <Tag color="var(--fr-navy)" className="absolute! left-1/2 top-4! m-0! -translate-x-1/2 rounded-full! border-0! px-5! py-1!">Most Popular</Tag>}
              </div>
              <div className="p-6">
                <h3 className="home-serif text-2xl text-[var(--fr-navy)]">{item.name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-[#66706c]">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#486059]">
                  <span><RocketOutlined /> Flights</span><span><BankOutlined /> Hotel</span><span><CheckOutlined /> Visa</span><span><EnvironmentOutlined /> Ziyarat</span>
                </div>
                <div className="my-6 h-px bg-[#e9e2d6]" />
                <p className="text-xs text-[#7a817e]">Starting from</p>
                <p className="mt-1 text-2xl font-extrabold text-[var(--fr-navy)]">PKR {item.price}</p>
                <Button href="#contact" block type={item.popular ? "primary" : "default"} className={`${item.popular ? "home-primary" : "border-[var(--fr-navy)]! text-[var(--fr-navy)]!"} mt-5 h-11! font-bold!`} icon={<ArrowRightOutlined />} iconPlacement="end">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
