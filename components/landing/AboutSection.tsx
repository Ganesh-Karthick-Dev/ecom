import { ArrowRight } from "lucide-react";

import { AboutMockup } from "@/components/landing/mock-visuals";
import { SectionIntro, SectionShell } from "@/components/landing/section-shell";

const stats = [
  { label: "200+", detail: "Pantry, millet, gifting, and routine-led product options across the range" },
  { label: "20+", detail: "Curated blends and staples designed for modern everyday cooking" },
  { label: "100%", detail: "Ingredient-led visual storytelling with a clean, product-first presentation" },
];

export function AboutSection() {
  return (
    <SectionShell className="py-10 sm:py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            title="About Us"
            subtitle="A trust-building story section that feels warmer, cleaner, and more premium than a generic brand block."
            center={false}
          />
          <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted)]">
            Built around millet blends, pantry staples, and ready-to-cook essentials, this section helps the brand feel rooted in everyday family wellness while still looking polished enough for a modern ecommerce launch.
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
