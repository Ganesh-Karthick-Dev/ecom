"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials, type TestimonialItem } from "@/components/landing/data";
import { SectionShell } from "@/components/landing/section-shell";

const avatarToneMap = {
  sage: "bg-[linear-gradient(135deg,#dbe9de,#8fb39a)] text-[color:var(--brand-ink)]",
  sand: "bg-[linear-gradient(135deg,#f5e6ce,#d8b67d)] text-[color:var(--brand-ink)]",
  stone: "bg-[linear-gradient(135deg,#eef0f2,#aab2bb)] text-[color:var(--brand-ink)]",
  sun: "bg-[linear-gradient(135deg,#f9e3a0,#edb75b)] text-[color:var(--brand-ink)]",
} as const;

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="relative flex min-h-[340px] w-[58vw] min-w-[220px] max-w-[250px] shrink-0 snap-start flex-col rounded-[1.8rem] border border-[color:var(--line)]/80 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)] sm:w-[300px] sm:max-w-[300px] sm:p-6 lg:w-[356px] lg:max-w-[356px] lg:p-7">
      <span className="pointer-events-none absolute right-5 top-5 text-[3.5rem] leading-none text-[color:var(--brand-ink)]/7 lg:text-[4rem]">
        &rdquo;
      </span>

      <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold shadow-[0_10px_22px_rgba(15,23,42,0.08)] ${avatarToneMap[item.tone]}`}>
        {item.initials}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-[color:var(--foreground)]/88 lg:text-base lg:leading-8">
        &quot;{item.quote}&quot;
      </p>

      <div className="mt-auto pt-8">
        <p className="font-signature text-[2rem] leading-none text-[color:var(--brand-ink)] lg:text-[2.3rem]">{item.name}</p>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
          {item.role} at {item.company}
        </p>
      </div>
    </article>
  );
}

export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollRail(direction: 1 | -1) {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const amount = Math.min(rail.clientWidth * 0.9, 420) * direction;
    rail.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <SectionShell className="py-10 sm:py-12 lg:py-16">
      <section className="rounded-[2.4rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f3_100%)] p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">Customer stories</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--brand-ink)] sm:text-5xl">
              Trusted words from real shoppers.
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              A quieter editorial testimonial style inspired by the reference, rebuilt with cleaner typography, stronger spacing, and a more premium retail tone.
            </p>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Scroll testimonials left"
              onClick={() => scrollRail(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--brand-ink)] transition duration-200 hover:border-[color:var(--brand-ink)]/20 hover:bg-[color:var(--brand-soft)]"
            >
              <ArrowLeft className="size-[18px]" strokeWidth={1.9} />
            </button>
            <button
              type="button"
              aria-label="Scroll testimonials right"
              onClick={() => scrollRail(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--brand-ink)] transition duration-200 hover:border-[color:var(--brand-ink)]/20 hover:bg-[color:var(--brand-soft)]"
            >
              <ArrowRight className="size-[18px]" strokeWidth={1.9} />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar -mx-6 mt-8 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
        >
          <div className="flex snap-x snap-mandatory gap-4 sm:gap-5 lg:gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} item={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 lg:hidden">
          <p className="text-sm text-[color:var(--muted)]">Swipe to explore more customer stories</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll testimonials left"
              onClick={() => scrollRail(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--brand-ink)]"
            >
              <ArrowLeft className="size-4" strokeWidth={1.9} />
            </button>
            <button
              type="button"
              aria-label="Scroll testimonials right"
              onClick={() => scrollRail(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--brand-ink)]"
            >
              <ArrowRight className="size-4" strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
