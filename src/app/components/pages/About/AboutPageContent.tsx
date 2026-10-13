"use client";

import Footer from "../Home/sections/Footer";
import Header from "../Home/sections/Header";
import "../Home/home.css";
import Image from "next/image";

const commitments = [
  {
    number: "01",
    title: "Personal guidance",
    description:
      "We listen first, then help you understand the choices available for your journey.",
  },
  {
    number: "02",
    title: "Thoughtful planning",
    description:
      "We take care with the practical details, so your travel plans feel clear and organized.",
  },
  {
    number: "03",
    title: "Care throughout",
    description:
      "We want you to feel supported from your first enquiry through your return home.",
  },
];

export default function AboutPageContent() {
  return (
    <main className="home-page min-h-screen bg-[#fbfaf6] text-[#142a25]">
      <Header />

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(118,200,225,0.2),_transparent_48%),linear-gradient(135deg,#fbfaf6_0%,#f2eee4_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[var(--fr-accent)]">
              About FR Travel
            </p>
            <h1 className="home-serif max-w-3xl text-5xl leading-[1.04] text-[var(--fr-navy)] sm:text-6xl lg:text-7xl">
              A message from our <span className="text-[var(--fr-accent)]">CEO</span>
            </h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#52615b] sm:text-lg">
              <p className="font-semibold text-[var(--fr-navy)]">
                Assalamu Alaikum wa Rahmatullahi wa Barakatuh.
              </p>
              <p>
                It is my privilege to welcome you to FR Travel. The journey of
                Umrah is deeply personal, and every traveler deserves care,
                clear guidance, and peace of mind from the first conversation
                through the journey home.
              </p>
              <p>
                Our aim is to listen to your needs, explain your options
                clearly, and help arrange your travel with comfort and care. We
                want to make the practical details easier, so you can focus on
                what matters most: your worship and reflection.
              </p>
              <p>
                May Allah accept your prayers and make your journey safe,
                meaningful, and full of blessings. We look forward to being
                part of your journey.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[var(--fr-accent)] pl-5">
              <p className="home-serif text-2xl font-bold text-[var(--fr-navy)]">
                Ijaz Ahmad
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#71817b]">
                Chief Executive Officer, FR Travel
              </p>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-[var(--fr-accent)]/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#dcebef] shadow-2xl shadow-[#003f63]/15">
              <Image
                src="/images/ijaz-ahmad.jpeg"
                alt="Ijaz Ahmad, Chief Executive Officer of FR Travel"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--fr-navy)]/95 via-[var(--fr-navy)]/75 to-transparent px-8 pb-6 pt-20 text-white">
                <p className="home-serif text-2xl font-bold">Ijaz Ahmad</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/75">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--fr-accent)]">
              What guides us
            </p>
            <h2 className="home-serif mt-4 text-4xl leading-tight text-[var(--fr-navy)] sm:text-5xl">
              Care in every part of the journey
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {commitments.map((commitment) => (
              <article
                key={commitment.number}
                className="rounded-3xl border border-[#e5ecec] bg-[#fbfaf6] p-7 sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[var(--fr-accent)]">
                  {commitment.number}
                </span>
                <h3 className="home-serif mt-5 text-2xl text-[var(--fr-navy)]">
                  {commitment.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#64716d]">
                  {commitment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
