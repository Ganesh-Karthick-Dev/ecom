import { Leaf } from "lucide-react";

import { SectionShell } from "@/components/landing/section-shell";

export function SectionDivider() {
  return (
    <SectionShell className="py-10 sm:py-14">
      <div className="mx-auto flex max-w-xl items-center justify-center gap-4 text-[color:var(--brand-ink)]/30">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--line)] to-transparent" />
        <Leaf className="size-5 text-[color:var(--accent)]" strokeWidth={1.7} />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--line)] to-transparent" />
      </div>
    </SectionShell>
  );
}
