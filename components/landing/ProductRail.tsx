"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { type ProductSection } from "@/components/landing/data";
import { ProductCard } from "@/components/landing/ProductCard";
import { SectionIntro, SectionShell } from "@/components/landing/section-shell";

export function ProductRail({ section }: { section: ProductSection }) {
  const defaultTab = section.tabs?.[0]?.id;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const products =
    section.tabs?.find((tab) => tab.id === activeTab)?.products ?? section.products ?? [];

  return (
    <SectionShell className="py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col gap-6 sm:gap-8">
        <SectionIntro title={section.title} subtitle={section.subtitle} />
        {section.tabs ? (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {section.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? "rounded-full bg-[color:var(--brand-ink)] px-4 py-2 text-sm font-semibold text-white"
                    : "rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--brand-ink)]"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/20 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-ink)]"
          >
            Show all
            <ArrowRight className="size-4" strokeWidth={1.9} />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
