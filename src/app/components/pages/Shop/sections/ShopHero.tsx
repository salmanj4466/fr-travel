import { GiftOutlined, HeartOutlined, RocketOutlined } from "@ant-design/icons";

const highlights = [
  [<GiftOutlined key="quality" />, "Quality products", "Trusted & reliable"],
  [<RocketOutlined key="travel" />, "Travel friendly", "Light & compact"],
  [<HeartOutlined key="care" />, "Made for pilgrims", "Selected with care"],
];

export default function ShopHero() {
  return (
    <section className="shop-hero relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,249,243,.98)_0%,rgba(251,249,243,.91)_40%,rgba(251,249,243,.18)_74%,rgba(8,45,38,.08)_100%)]" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.42em] text-[var(--fr-accent)]">Umrah essentials</p>
          <h1 className="home-serif text-5xl leading-[1.02] text-[var(--fr-navy)] sm:text-7xl">
            Everything you need<br />for a <span className="home-script text-[var(--fr-accent)]">blessed journey</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#35443f] sm:text-lg">High-quality essentials to make your Umrah journey comfortable, organized, and worry-free.</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {highlights.map(([icon, title, description]) => (
              <div key={String(title)} className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eee8db] text-xl text-[var(--fr-navy)]">{icon}</span>
                <span><strong className="block text-sm capitalize text-[var(--fr-navy)]">{title}</strong><small className="text-[#737b78]">{description}</small></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
