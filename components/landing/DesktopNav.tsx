"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import type { DesktopNavItem } from "@/components/landing/data";
import { navItems } from "@/components/landing/data";
import { iconMap } from "@/components/landing/icons";

const dropdownLabels = new Set(["Shop by Category", "Find a Routine", "Health Goals"]);

function MegaMenuContent({ item }: { item: DesktopNavItem }) {
  if (!item.menu) {
    return null;
  }

  const FeatureIcon = iconMap[item.menu.feature.icon];

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-[color:var(--line)] bg-white shadow-[0_24px_64px_rgba(33,77,58,0.12)]">
      <div className="grid lg:grid-cols-[minmax(0,1.55fr)_360px]">
        <div className="p-6 xl:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_repeat(3,minmax(0,1fr))]">
            <div className="pr-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--muted)]">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.menu.intro}</p>
              <a
                href={item.href}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-ink)] transition duration-200 hover:border-[color:var(--brand-ink)]/20 hover:bg-[color:var(--brand-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ink)]/15"
              >
                {item.menu.cta}
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </a>
            </div>

            {item.menu.columns.map((column) => (
              <div key={column.heading}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  {column.heading}
                </p>
                <div className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block cursor-pointer rounded-[1rem] border border-transparent px-3.5 py-2.5 transition duration-200 hover:border-[color:var(--line)] hover:bg-[color:var(--brand-soft)]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ink)]/15"
                    >
                      <span className="block text-sm font-semibold text-[color:var(--brand-ink)]">{link.label}</span>
                      <span className="mt-1 block text-[13px] leading-5 text-[color:var(--muted)]">{link.blurb}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(245,248,245,0.95),rgba(255,255,255,1))] p-6 xl:p-7">
          <div className="flex h-full flex-col rounded-[1.4rem] border border-[color:var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(33,77,58,0.08)]">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand-ink)]">
              <FeatureIcon className="size-5" strokeWidth={1.8} />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
              {item.menu.feature.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-[2rem] leading-none text-[color:var(--brand-ink)] xl:text-[2.2rem]">
              {item.menu.feature.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.menu.feature.description}</p>
            <div className="mt-5 space-y-2.5">
              {item.menu.feature.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 text-sm text-[color:var(--brand-ink)]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand-ink)]" />
                  <span className="leading-6">{highlight}</span>
                </div>
              ))}
            </div>
            <a
              href={item.href}
              className="mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[color:var(--brand-ink)] transition duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ink)]/15"
            >
              Explore this collection
              <ArrowRight className="size-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopNav() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeItem = useMemo(
    () => navItems.find((item) => item.label === activeLabel && item.menu && dropdownLabels.has(item.label)),
    [activeLabel],
  );

  const clearPendingClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = (label: string) => {
    clearPendingClose();
    setActiveLabel(label);
  };

  const scheduleClose = () => {
    clearPendingClose();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveLabel(null);
    }, 120);
  };

  useEffect(() => {
    return () => {
      clearPendingClose();
    };
  }, []);

  return (
    <div className="hidden w-full border-b border-[color:var(--line)] bg-white md:block">
      <div className="relative w-full" onMouseLeave={scheduleClose}>
        <div className="w-full px-4 sm:px-6 xl:px-8 2xl:px-10">
          <nav className="flex min-h-[48px] items-center justify-center gap-x-1.5">
            {navItems.map((item) => {
              const isActive = activeItem?.label === item.label;
              const hasDropdown = Boolean(item.menu && dropdownLabels.has(item.label));

              if (!hasDropdown) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--brand-ink)] transition duration-200 hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ink)]/15"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <button
                  key={item.label}
                  type="button"
                  aria-expanded={isActive}
                  aria-haspopup="true"
                  onMouseEnter={() => openMenu(item.label)}
                  onFocus={() => openMenu(item.label)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ink)]/15 ${
                    isActive
                      ? "bg-[color:var(--brand-soft)] text-[color:var(--brand-ink)]"
                      : "text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand-ink)]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition duration-200 ${isActive ? "rotate-180" : "rotate-0"}`}
                    strokeWidth={1.9}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        <div
          className={`absolute inset-x-0 top-full z-50 origin-top border-t border-[color:var(--line)]/80 bg-white/98 backdrop-blur-[10px] transition-[opacity,transform,visibility] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeItem ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"
          }`}
          onMouseEnter={clearPendingClose}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full px-4 pb-5 sm:px-6 lg:px-8 xl:px-10">
            {activeItem ? (
              <div key={activeItem.label} className="mega-menu-content mx-auto max-w-[1440px] pt-5">
                <MegaMenuContent item={activeItem} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
