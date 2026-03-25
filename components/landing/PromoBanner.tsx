import { PromoMockup } from "@/components/landing/mock-visuals";
import { SectionShell } from "@/components/landing/section-shell";

export function PromoBanner() {
  return (
    <SectionShell className="py-8 sm:py-10">
      <PromoMockup />
    </SectionShell>
  );
}
