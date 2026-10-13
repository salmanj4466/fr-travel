import { ArrowRightOutlined, CheckCircleFilled, SafetyCertificateFilled, TeamOutlined } from "@ant-design/icons";
import { Button } from "antd";

const trustItems = [
  [<SafetyCertificateFilled key="safe" />, "Trusted travel partner"],
  [<CheckCircleFilled key="check" />, "Comfort & convenience"],
  [<TeamOutlined key="team" />, "Guidance at every step"],
];

export default function Hero() {
  return (
    <section id="home" className="home-hero relative min-h-[760px] overflow-hidden pt-20 sm:min-h-[820px] sm:pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,249,242,.98)_0%,rgba(251,249,242,.9)_36%,rgba(251,249,242,.28)_68%,rgba(9,52,43,.18)_100%)]" />
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 pb-10 pt-14 sm:px-8 sm:pb-28 lg:pb-36">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.42em] text-[var(--fr-accent)]">Umrah travel services</p>
          <h1 className="home-serif text-5xl leading-[.98] text-[var(--fr-navy)] sm:text-7xl lg:text-[88px]">
            A spiritual<br />journey of a<br /><span className="home-script text-[var(--fr-accent)]">lifetime</span>
          </h1>
          <p className="mt-8 max-w-lg text-base font-medium leading-7 text-[#31433e] sm:text-lg">
            Let us make your Umrah journey comfortable, organized, and spiritually fulfilling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#packages" type="primary" shape="round" size="large" className="home-primary h-13! px-7! font-bold!" icon={<ArrowRightOutlined />} iconPlacement="end">
              Explore Packages
            </Button>
            <Button href="/about" shape="round" size="large" className="h-13! border-[var(--fr-navy)]! bg-white/75! px-7! font-bold! text-[var(--fr-navy)]!">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>

      <div className="home-hero-trust absolute inset-x-0 bottom-0 border-t border-white/50 bg-white/78 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8">
          {trustItems.map(([icon, label]) => (
            <div key={String(label)} className="flex items-center justify-center gap-3 text-xs font-semibold text-[#40534d] sm:text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#efe6d3] text-lg text-[var(--fr-accent)]">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
