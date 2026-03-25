import { ArrowRight } from "lucide-react";

import { categories } from "@/components/landing/data";
import { iconMap } from "@/components/landing/icons";
import { SectionIntro, SectionShell } from "@/components/landing/section-shell";

function CategoryCard({ title, icon }: { title: string; icon: keyof typeof iconMap }) {
  const Icon = iconMap[icon];

  return (
    <div className="group rounded-[1.25rem] border border-[color:var(--line)] bg-white p-4 text-center shadow-[0_12px_30px_rgba(33,77,58,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(33,77,58,0.08)] sm:rounded-[1.5rem] sm:p-5">
      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand-ink)] sm:size-14">
        <Icon className="size-5 sm:size-6" strokeWidth={1.8} />
      </div>
      <p className="mt-3 text-[13px] font-semibold leading-5 text-[color:var(--brand-ink)] sm:mt-4 sm:text-base sm:leading-6">
        {title}
      </p>
    </div>
  );
}

export function CategoryGrid() {
  return (
    <SectionShell className="pb-10">
      <div className="rounded-[2.2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8 lg:p-10">
        <SectionIntro
          title="Shop by Categories"
          subtitle="The same broad discovery layer as the reference, rebuilt with stronger icon rhythm and better card spacing."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} title={category.title} icon={category.icon} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/20 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-ink)]"
          >
            Shop all categories
            <ArrowRight className="size-4" strokeWidth={1.9} />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
