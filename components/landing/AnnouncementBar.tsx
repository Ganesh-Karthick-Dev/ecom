import { Sparkles } from "lucide-react";

import { announcementItems } from "@/components/landing/data";

const desktopMarqueeItems = [...announcementItems, ...announcementItems];
const mobileAnnouncementItems = [
  "Free Shipping On Orders Above Rs. 799",
  "PAN India Delivery Available",
  "Handcrafted pantry essentials",
];
const mobileMarqueeItems = [...mobileAnnouncementItems, ...mobileAnnouncementItems];

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-[color:var(--brand-ink)] text-white">
      <div className="border-b border-white/10 md:hidden">
        <div className="announcement-marquee flex w-max min-w-full items-center py-1.5">
          {mobileMarqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-2 px-4 text-[11px] font-semibold tracking-[0.02em] text-white/95"
            >
              <span className="size-1 shrink-0 rounded-full bg-[color:var(--sun)]" />
              <span className="whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden border-b border-[color:var(--brand-ink)]/10 md:block">
        <div className="announcement-marquee flex w-max min-w-full items-center py-2.5">
          {desktopMarqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-3 px-6 text-sm font-semibold tracking-[0.01em] text-white/95 sm:px-8 sm:text-base"
            >
              <Sparkles className="size-4 shrink-0 text-[color:var(--sun)]" strokeWidth={1.9} />
              <span className="whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

