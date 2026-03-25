import {
  BadgeCheck,
  Camera,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Play,
  ShieldCheck,
} from "lucide-react";

import { accountLinks, policyLinks, quickLinks } from "@/components/landing/data";
import { SectionShell } from "@/components/landing/section-shell";

const mobileAccountLinks = ["Home", "About Us", "My Orders", "Contact Us"];

function FooterLinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-white/90 transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileFooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="text-center">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-white/88 transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-ink)] text-white">
      <div className="mx-auto max-w-[430px] px-5 py-8 md:hidden">
        <div className="text-center">
          <p className="text-[2rem] font-semibold tracking-[-0.05em] text-white">Your logo</p>
          <p className="mt-4 text-sm leading-7 text-white/84">
            The biggest asset you can pass to your family is healthier everyday living, brought together through clean pantry essentials.
          </p>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-6 text-white/88">
          <div className="flex items-start justify-center gap-3 text-center">
            <MapPin className="mt-1 size-4 shrink-0" strokeWidth={1.8} />
            <span>15 Wellness Avenue, Chennai, Tamil Nadu 600100</span>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center justify-center gap-3">
              <PhoneCall className="size-4 shrink-0" strokeWidth={1.8} />
              <span>+91 90000 00000</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="size-4 shrink-0" strokeWidth={1.8} />
              <span>hello@yourlogo.com</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-white/85">
          {[Globe, Camera, Play, MessageCircle].map((Icon, index) => (
            <a key={index} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10">
              <Icon className="size-4" strokeWidth={1.8} />
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-white/15 pt-6">
          <div className="grid grid-cols-2 gap-8">
            <MobileFooterColumn title="Accounts" links={mobileAccountLinks} />
            <MobileFooterColumn title="Policy Pages" links={policyLinks} />
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.1rem] border border-white/14 bg-white/6 px-4 py-4 text-center">
              <BadgeCheck className="mx-auto size-5" strokeWidth={1.8} />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">IEC Ready</p>
              <p className="mt-1 text-[11px] leading-5 text-white/70">Export documentation placeholder</p>
            </div>
            <div className="rounded-[1.1rem] border border-white/14 bg-white/6 px-4 py-4 text-center">
              <ShieldCheck className="mx-auto size-5" strokeWidth={1.8} />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">FSSAI Ready</p>
              <p className="mt-1 text-[11px] leading-5 text-white/70">Compliance badge placeholder</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/72">Copyright 2026 Your logo. All Rights Reserved.</p>
      </div>

      <div className="hidden md:block">
        <SectionShell className="py-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">The pantry company</p>
              <p className="mt-3 font-display text-4xl leading-none">Your logo</p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
                The biggest asset you can pass to your family is a healthier everyday ritual. This footer keeps that tone while staying flexible for later content updates.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-4 shrink-0" strokeWidth={1.8} />
                  <span>Sample studio address, Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="size-4 shrink-0" strokeWidth={1.8} />
                  <span>+91 90000 00000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0" strokeWidth={1.8} />
                  <span>hello@yourlogo.com</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 text-white/80">
                {[Globe, Camera, Play, MessageCircle].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
                  >
                    <Icon className="size-4" strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>
            <FooterLinkColumn title="Quick Links" links={quickLinks} />
            <FooterLinkColumn title="Accounts" links={accountLinks} />
            <FooterLinkColumn title="Policy Pages" links={policyLinks} />
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/65">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>Copyright 2026 Your logo. Built as a reusable landing page system.</p>
              <p>Monochrome lucide icons. Placeholder visuals ready for asset swaps.</p>
            </div>
          </div>
        </SectionShell>
      </div>
    </footer>
  );
}

