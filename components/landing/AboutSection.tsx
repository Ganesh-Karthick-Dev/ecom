import { ArrowRight } from "lucide-react";

import { AboutMockup } from "@/components/landing/mock-visuals";
import { SectionIntro, SectionShell } from "@/components/landing/section-shell";

const stats = [
  { label: "200+", detail: "Products across pantry, gifting, and routine-based collections" },
  { label: "20+", detail: "Producer partnerships designed to support a sourcing story" },
  { label: "100%", detail: "Single-color icon system and editable visual placeholders" },
];

export function AboutSection() {
  return (
    <SectionShell className="py-10 sm:py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            title="About Us"
            subtitle="This section keeps the familiar trust-building role of the reference, but becomes more editorial and easier to update."
            center={false}
          />
          <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted)]">
            This placeholder brand story gives you an image slot, a warm brand voice, and clean proof points without locking the design to final photography too early.
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(233,131,52,0.22)]"
            >
              Shop now
              <ArrowRight className="size-4" strokeWidth={1.9} />
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] border border-[color:var(--line)] bg-white p-5 shadow-[0_12px_26px_rgba(33,77,58,0.05)]"
              >
                <p className="font-display text-4xl leading-none text-[color:var(--brand-ink)]">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <AboutMockup />
      </div>
    </SectionShell>
  );
}
