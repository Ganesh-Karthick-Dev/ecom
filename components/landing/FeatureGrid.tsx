import { featureItems } from "@/components/landing/data";
import { iconMap } from "@/components/landing/icons";
import { SectionIntro, SectionShell } from "@/components/landing/section-shell";

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}) {
  const Icon = iconMap[icon];

  return (
    <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_34px_rgba(33,77,58,0.05)]">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand-ink)]">
        <Icon className="size-6" strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[color:var(--brand-ink)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
    </div>
  );
}

export function FeatureGrid() {
  return (
    <SectionShell className="py-8 sm:py-10 lg:py-14">
      <SectionIntro
        title="Organic Foods & Healthy Protein Choices"
        subtitle="A simple four-card grid that mirrors the reference content role while feeling more premium and less template-bound."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {featureItems.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </SectionShell>
  );
}
