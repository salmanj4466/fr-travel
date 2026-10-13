"use client";

import { CloseOutlined, MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import UmrahPlanningDialog from "../../../common/UmrahPlanningDialog";

const links = [
  ["Home", "#home"],
  ["About", "/about"],
  ["Packages", "#packages"],
  ["Shop", "/shop"],
  ["Why Us", "#why-us"],
  ["Testimonials", "#testimonials"],
  ["Contact", "/contact"],
];

export default function Header() {
  const pathname = usePathname();
  const mobileNavigationId = useId();
  const [open, setOpen] = useState(false);
  const [planningOpen, setPlanningOpen] = useState(false);
  const resolveHref = (href: string) => href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const isCurrentPage = (href: string) => href === "#home" ? pathname === "/" : href === pathname;

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-[var(--fr-navy)]/10 bg-[#fbfaf6]/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-8">
        <Link href={resolveHref("#home")} onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3" aria-label="FR Travel home">
          <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm sm:h-14 sm:w-14">
            <Image src="/images/WhatsApp Image 2026-08-19 at 2.23.37 PM.jpeg" alt="FR Travel" fill className="object-cover" sizes="(min-width: 640px) 56px, 48px" priority />
          </span>
          <span className="hidden leading-tight text-[var(--fr-navy)] sm:block">
            <strong className="home-serif block text-lg tracking-[0.08em]">FR TRAVEL</strong>
            <small className="text-[9px] font-bold uppercase tracking-[0.22em]">Journey closer to faith</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={resolveHref(href)} aria-current={isCurrentPage(href) ? "page" : undefined} className={`border-b-2 py-2 text-[13px] font-semibold text-[var(--fr-navy)] transition hover:text-[var(--fr-accent)] ${isCurrentPage(href) ? "border-[var(--fr-navy)]" : "border-transparent"}`}>
              {label}
            </Link>
          ))}
        </nav>

        <Button onClick={() => setPlanningOpen(true)} aria-haspopup="dialog" type="primary" shape="round" icon={<PhoneOutlined />} className="home-primary hidden! h-11! px-6! font-semibold! xl:inline-flex!">
          Plan Your Umrah
        </Button>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-[var(--fr-navy)] text-white sm:h-11 sm:w-11 xl:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open} aria-controls={mobileNavigationId}>
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {open && (
        <nav id={mobileNavigationId} className="mx-4 mb-4 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur-xl xl:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={resolveHref(href)} onClick={() => setOpen(false)} aria-current={isCurrentPage(href) ? "page" : undefined} className={`block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--fr-navy)] hover:bg-[#f4efe5] ${isCurrentPage(href) ? "bg-[#f4efe5]" : ""}`}>
              {label}
            </Link>
          ))}
          <Button onClick={() => setPlanningOpen(true)} aria-haspopup="dialog" type="primary" block className="home-primary mt-3 h-11! font-semibold!">Plan Your Umrah</Button>
        </nav>
      )}
      <UmrahPlanningDialog open={planningOpen} onClose={() => setPlanningOpen(false)} />
    </header>
  );
}
