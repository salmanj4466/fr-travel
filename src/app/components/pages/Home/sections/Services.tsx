import { BankOutlined, CarOutlined, CustomerServiceOutlined, FileDoneOutlined, RocketOutlined, TeamOutlined } from "@ant-design/icons";
import SectionTitle from "../SectionTitle";

const services = [
  [<RocketOutlined key="flight" />, "Flight", "Arrangements"],
  [<BankOutlined key="hotel" />, "Hotel", "Reservations"],
  [<FileDoneOutlined key="visa" />, "Visa", "Assistance"],
  [<CarOutlined key="car" />, "Local", "Transport"],
  [<TeamOutlined key="guides" />, "Experienced", "Guides"],
  [<CustomerServiceOutlined key="support" />, "24/7", "Support"],
];

export default function Services() {
  return (
    <section className="home-section bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Our services" title="Everything you need for a" accent="hassle-free Umrah" />
          <p className="max-w-sm text-sm leading-7 text-[#66706c]">From flights to hotels and on-ground support, we take care of everything so you can focus on your ibadah.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
          {services.map(([icon, first, second]) => (
            <div key={String(first)} className="group text-center">
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#f1ede5] text-3xl text-[var(--fr-navy)] transition group-hover:-translate-y-1 group-hover:bg-[var(--fr-navy)] group-hover:text-white">{icon}</span>
              <p className="mt-4 text-sm font-bold leading-5 text-[var(--fr-navy)]">{first}<br />{second}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
