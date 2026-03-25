import { trustItems } from "@/components/landing/data";
import { iconMap } from "@/components/landing/icons";

function TrustItem({
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
    <div className="rounded-[1.2rem] bg-white/82 p-4 text-center sm:rounded-[1.35rem] sm:p-5">
      <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-white text-[color:var(--brand-ink)] shadow-[0_10px_20px_rgba(33,77,58,0.05)] sm:size-12">
        <Icon className="size-5" strokeWidth={1.8} />
      </div>
      <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-ink)] sm:mt-4 sm:text-sm sm:tracking-[0.18em]">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-5 text-[color:var(--muted)] sm:text-sm sm:leading-6">{description}</p>
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="w-full bg-[color:var(--mint)] py-8 sm:py-10">
      <div className="w-full px-4 sm:px-6 xl:px-8 2xl:px-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {trustItems.map((item) => (
            <TrustItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
