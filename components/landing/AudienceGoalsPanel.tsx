import { audienceGoals } from "@/components/landing/data";
import { iconMap } from "@/components/landing/icons";
import { SectionShell } from "@/components/landing/section-shell";

function GoalCard({ title, icon }: { title: string; icon: keyof typeof iconMap }) {
  const Icon = iconMap[icon];

  return (
    <div className="rounded-[1.25rem] border border-[color:var(--line)] bg-white/85 p-4 text-center sm:rounded-[1.5rem] sm:p-5">
      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[color:var(--surface)] text-[color:var(--brand-ink)] shadow-[0_12px_24px_rgba(33,77,58,0.06)] sm:size-14">
        <Icon className="size-5 sm:size-6" strokeWidth={1.8} />
      </div>
      <p className="mt-3 text-sm font-semibold leading-5 text-[color:var(--brand-ink)] sm:mt-4 sm:text-base">{title}</p>
    </div>
  );
}

export function AudienceGoalsPanel() {
  return (
    <SectionShell className="py-8 sm:py-10">
      <div className="rounded-[2.4rem] border border-[color:var(--line)] bg-white p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink)]">
              Guided discovery
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--brand-ink)] sm:text-5xl">
              Choose by Health Goals
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              We keep the same intent as the reference section, but present it with clearer cards, better touch targets, and stronger mobile spacing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {audienceGoals.map((goal) => (
              <GoalCard key={goal.title} title={goal.title} icon={goal.icon} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
