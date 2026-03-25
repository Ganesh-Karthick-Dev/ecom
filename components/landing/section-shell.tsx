export function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}

export function SectionIntro({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <h2 className="font-display text-4xl leading-tight text-[color:var(--brand-ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-[color:var(--muted)] sm:text-lg">{subtitle}</p>
    </div>
  );
}
