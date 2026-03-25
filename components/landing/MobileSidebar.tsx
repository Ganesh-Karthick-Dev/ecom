"use client";

import { useEffect, useState } from "react";
import { Minus, PhoneCall, Plus, X } from "lucide-react";

import { audienceGoals, categories, quickLinks } from "@/components/landing/data";
import { iconMap } from "@/components/landing/icons";

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

type SectionKey = "category" | "solution" | "goals" | "shop" | null;

const solutionLinks = [
  "Daily cooking routine",
  "Kids-friendly pantry",
  "Hair and beauty care",
  "Gift-ready bundles",
];

function DrawerSection({
  title,
  highlight,
  open,
  onToggle,
  children,
}: {
  title: string;
  highlight?: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[color:var(--line)]/90 first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[15px] font-semibold text-[color:var(--foreground)]"
      >
        <span>
          {title} {highlight ? <span className="text-[color:var(--accent)]">{highlight}</span> : null}
        </span>
        {open ? <Minus className="size-4 shrink-0" strokeWidth={2} /> : <Plus className="size-4 shrink-0" strokeWidth={2} />}
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const [openSection, setOpenSection] = useState<SectionKey>("category");

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-[70] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-[rgba(17,24,39,0.2)] backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-y-0 left-0 w-[86vw] max-w-[340px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <aside className="relative flex h-full flex-col overflow-hidden border-r border-[color:var(--line)] bg-white shadow-[0_24px_64px_rgba(33,77,58,0.18)]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className={`absolute left-full top-6 flex h-11 w-11 items-center justify-center bg-[#f25d3d] text-white shadow-[0_18px_30px_rgba(0,0,0,0.18)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
          >
            <X className="size-4.5" strokeWidth={2.2} />
          </button>

          <div className="flex-1 overflow-y-auto">
            <div className="px-5 pb-5 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">Browse menu</p>
            </div>

            <DrawerSection
              title="Shop By"
              highlight="Category"
              open={openSection === "category"}
              onToggle={() => setOpenSection((current) => (current === "category" ? null : "category"))}
            >
              <div className="max-h-[310px] overflow-y-auto px-5 pb-5 pr-3">
                <div className="grid grid-cols-3 gap-x-3 gap-y-5">
                  {categories.map((category) => {
                    const Icon = iconMap[category.icon];

                    return (
                      <a
                        key={category.title}
                        href="#"
                        className="flex items-start justify-center text-center text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
                      >
                        <div className="flex max-w-[88px] flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--brand-soft)]/35 text-[color:var(--brand-ink)]">
                            <Icon className="size-6" strokeWidth={1.8} />
                          </div>
                          <span className="text-[12px] font-medium leading-4">{category.title}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </DrawerSection>

            <DrawerSection
              title="Find"
              highlight="Solution"
              open={openSection === "solution"}
              onToggle={() => setOpenSection((current) => (current === "solution" ? null : "solution"))}
            >
              <div className="space-y-2 px-5 pb-5">
                {solutionLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block rounded-2xl border border-[color:var(--line)] bg-[color:var(--brand-soft)]/40 px-4 py-3 text-sm font-medium text-[color:var(--brand-ink)] transition hover:border-[color:var(--brand-ink)]/15 hover:bg-[color:var(--brand-soft)]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </DrawerSection>

            <DrawerSection
              title="Choose By"
              highlight="Health Goals"
              open={openSection === "goals"}
              onToggle={() => setOpenSection((current) => (current === "goals" ? null : "goals"))}
            >
              <div className="grid grid-cols-2 gap-3 px-5 pb-5">
                {audienceGoals.map((goal) => {
                  const Icon = iconMap[goal.icon];

                  return (
                    <a
                      key={goal.title}
                      href="#"
                      className="flex items-center gap-3 rounded-2xl border border-[color:var(--line)] px-3 py-3 text-sm font-medium text-[color:var(--brand-ink)] transition hover:border-[color:var(--brand-ink)]/15 hover:bg-[color:var(--brand-soft)]/45"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--brand-soft)]/65 text-[color:var(--brand-ink)]">
                        <Icon className="size-5" strokeWidth={1.8} />
                      </div>
                      <span className="leading-5">{goal.title}</span>
                    </a>
                  );
                })}
              </div>
            </DrawerSection>

            <DrawerSection
              title="Shop all"
              open={openSection === "shop"}
              onToggle={() => setOpenSection((current) => (current === "shop" ? null : "shop"))}
            >
              <div className="space-y-2 px-5 pb-5">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block rounded-2xl border border-[color:var(--line)] px-4 py-3 text-sm font-medium text-[color:var(--brand-ink)] transition hover:border-[color:var(--brand-ink)]/15 hover:bg-[color:var(--brand-soft)]/45"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </DrawerSection>
          </div>

          <div className="border-t border-[color:var(--line)] bg-white px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[color:var(--foreground)]">Need help on order?</p>
            <div className="mt-2 flex items-center gap-3 text-sm text-[color:var(--muted)]">
              <PhoneCall className="size-4 shrink-0 text-[color:var(--brand-ink)]" strokeWidth={1.9} />
              <span>Call or Whatsapp +91 90000 00000</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
