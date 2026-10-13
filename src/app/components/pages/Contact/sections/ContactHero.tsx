import {
  MessageOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const promises = [
  [<MessageOutlined key="reply" />, "Quick response", "We reply promptly"],
  [<TeamOutlined key="support" />, "Friendly support", "Always here for you"],
  [<SafetyCertificateOutlined key="trust" />, "Trusted guidance", "Travel with confidence"],
];

export default function ContactHero() {
  return (
    <section className="contact-hero relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,249,243,.98)_0%,rgba(251,249,243,.88)_43%,rgba(251,249,243,.18)_76%,rgba(8,45,38,.08)_100%)]" />
      <div className="relative mx-auto flex min-h-[570px] max-w-7xl items-center px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.42em] text-[var(--fr-accent)]">Contact us</p>
          <h1 className="home-serif text-5xl leading-[1.02] text-[var(--fr-navy)] sm:text-7xl">
            We are here<br />
            <span className="home-script text-[var(--fr-accent)]">for your spiritual journey</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#35443f] sm:text-lg">
            Have a question, need guidance, or ready to book your Umrah? Our
            team is just a message away. We&apos;re here to help you every step
            of the way.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {promises.map(([icon, title, description]) => (
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
