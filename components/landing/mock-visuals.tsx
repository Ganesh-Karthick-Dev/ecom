import { Gift, Leaf, MessageCircle, Package, QrCode, ShieldCheck, Sparkles } from "lucide-react";

type ProductTone = "bottle" | "jar" | "packet";

const visualCardClass =
  "relative overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_24px_60px_rgba(33,77,58,0.08)]";

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function HeroMockup({ visual }: { visual: "community" | "pantry" | "gift" }) {
  if (visual === "community") {
    return (
      <div className={`grid gap-4 lg:grid-cols-[1.1fr_0.9fr] ${visualCardClass} p-4 sm:p-6`}>
        <div className="rounded-[1.25rem] bg-[linear-gradient(160deg,rgba(248,238,228,0.95),rgba(255,255,255,0.98))] p-5">
          <div className="mb-5 flex items-center justify-between text-[color:var(--brand-ink)]">
            <span className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
              Community Access
            </span>
            <Sparkles className="size-5" strokeWidth={1.8} />
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="flex min-h-44 items-center justify-center rounded-[1.1rem] border border-dashed border-[color:var(--line)] bg-white/90">
              <div className="space-y-3 text-center text-[color:var(--brand-ink)]">
                <QrCode className="mx-auto size-16" strokeWidth={1.6} />
                <p className="text-sm font-medium">Placeholder QR block</p>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-[1.1rem] bg-[color:var(--brand-soft)]/80 p-4 text-[color:var(--brand-ink)]">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
                  <Leaf className="size-4" strokeWidth={1.9} />
                  Daily tips
                </div>
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  Swap this area for WhatsApp or campaign artwork later.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1rem] bg-white/90 p-3 text-[color:var(--brand-ink)]">
                  <ShieldCheck className="mb-3 size-5" strokeWidth={1.8} />
                  <p className="text-sm font-semibold">Single-color icons</p>
                </div>
                <div className="rounded-[1rem] bg-white/90 p-3 text-[color:var(--brand-ink)]">
                  <Package className="mb-3 size-5" strokeWidth={1.8} />
                  <p className="text-sm font-semibold">Editable visuals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(33,77,58,0.12),rgba(33,77,58,0.04))] p-4">
          <div className="mx-auto flex h-full max-w-64 items-center justify-center rounded-[2rem] border border-[color:var(--line)] bg-white px-4 py-6 shadow-[0_16px_45px_rgba(33,77,58,0.1)]">
            <div className="w-full space-y-4 text-[color:var(--brand-ink)]">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)]">
                <MessageCircle className="size-6" strokeWidth={1.7} />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-display text-2xl leading-none">Sample phone mockup</h3>
                <p className="text-sm text-[color:var(--muted)]">
                  Replace with campaign creative later.
                </p>
              </div>
              <div className="grid gap-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--brand-soft)]/50 p-3"
                  >
                    <div className="mb-2 h-2 w-20 rounded-full bg-[color:var(--brand-ink)]/15" />
                    <div className="h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "gift") {
    return (
      <div className={`${visualCardClass} flex h-full min-h-80 items-center justify-center bg-[linear-gradient(160deg,rgba(248,238,228,1),rgba(255,255,255,1))] p-5`}>
        <div className="grid w-full max-w-3xl gap-4 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-[1.25rem] bg-[color:var(--brand-ink)] p-5 text-white">
            <Gift className="mb-4 size-8" strokeWidth={1.8} />
            <h3 className="font-display text-4xl leading-none">Bundle mockup</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
              Use this zone for offer photography, labels, or pack shots later.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-dashed border-[color:var(--line)] bg-white/80 p-4">
            <div className="grid h-full gap-3 sm:grid-cols-3">
              <div className="rounded-[1rem] bg-[color:var(--brand-soft)] p-4">
                <div className="mx-auto h-full min-h-32 rounded-[1rem] bg-[linear-gradient(180deg,#f4c85b,#f5b76a)]" />
              </div>
              <div className="rounded-[1rem] bg-[color:var(--paper)] p-4">
                <div className="mx-auto h-full min-h-40 rounded-[1rem] bg-[linear-gradient(180deg,#d8e9dd,#b9d6c0)]" />
              </div>
              <div className="rounded-[1rem] bg-[color:var(--brand-soft)] p-4">
                <div className="mx-auto h-full min-h-36 rounded-[1rem] bg-[linear-gradient(180deg,#f3a95f,#e07b36)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${visualCardClass} flex min-h-80 items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,238,228,0.9))] p-5`}>
      <div className="grid w-full max-w-4xl gap-4 lg:grid-cols-[1fr_1.15fr]">
        <div className="rounded-[1.2rem] bg-[color:var(--brand-soft)]/75 p-5 text-[color:var(--brand-ink)]">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em]">
            <Leaf className="size-4" strokeWidth={1.9} />
            Sample product lineup
          </div>
          <h3 className="font-display text-4xl leading-none">Editable product artwork</h3>
          <p className="mt-4 max-w-md text-sm leading-6 text-[color:var(--muted)]">
            This keeps the banner image-led like the reference while giving you a clean placeholder system for later.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-end justify-center rounded-[1.2rem] border border-[color:var(--line)] bg-white p-4 shadow-[0_16px_36px_rgba(33,77,58,0.08)]"
            >
              <div className="relative w-full max-w-24 rounded-[1.5rem_1.5rem_1rem_1rem] bg-[linear-gradient(180deg,#f6d47d,#d48d3d)] px-3 pb-4 pt-6">
                <div className="absolute left-1/2 top-2 h-4 w-8 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/30" />
                <div className="rounded-[0.9rem] bg-white p-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
                  Mock {item}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductBottle() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.6))]" />
      <div className="absolute left-1/2 top-7 h-5 w-11 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/34" />
      <div className="absolute bottom-4 left-1/2 h-36 w-28 -translate-x-1/2 rounded-[1.45rem_1.45rem_1rem_1rem] border border-[color:var(--line)] bg-white shadow-[0_18px_40px_rgba(33,77,58,0.1)]" />
      <div className="absolute bottom-[5.2rem] left-1/2 h-12 w-16 -translate-x-1/2 rounded-xl bg-[color:var(--brand-soft)]" />
      <div className="absolute bottom-[4.1rem] left-1/2 h-2 w-[4.25rem] -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/10" />
      <div className="absolute bottom-5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/8 blur-sm" />
    </>
  );
}

function ProductJar() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.54))]" />
      <div className="absolute left-1/2 top-7 h-7 w-16 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/34" />
      <div className="absolute bottom-4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-[1.25rem] border border-[color:var(--line)] bg-white shadow-[0_18px_40px_rgba(33,77,58,0.1)]" />
      <div className="absolute bottom-[4.7rem] left-1/2 h-11 w-20 -translate-x-1/2 rounded-xl bg-[color:var(--brand-soft)]" />
      <div className="absolute bottom-[3.7rem] left-1/2 h-2 w-[4.8rem] -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/10" />
      <div className="absolute bottom-5 left-1/2 h-4 w-24 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/8 blur-sm" />
    </>
  );
}

function ProductPacket() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.56))]" />
      <div className="absolute inset-x-8 bottom-4 top-6 rounded-[1rem] border border-[color:var(--line)] bg-white shadow-[0_18px_40px_rgba(33,77,58,0.1)]" />
      <div className="absolute inset-x-12 top-11 h-11 rounded-[0.95rem] bg-[color:var(--brand-soft)]" />
      <div className="absolute inset-x-12 top-[6.9rem] h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
      <div className="absolute inset-x-14 top-[8.15rem] h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
      <div className="absolute inset-x-14 top-[9.4rem] h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
      <div className="absolute bottom-5 left-1/2 h-4 w-24 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/8 blur-sm" />
    </>
  );
}

export function ProductMockup({ tone, className }: { tone: ProductTone; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,238,226,0.86))]",
        tone === "jar" ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(233,241,232,0.9))]" : undefined,
        tone === "bottle" ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,200,91,0.18))]" : undefined,
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0))]" />
      {tone === "packet" ? <ProductPacket /> : null}
      {tone === "jar" ? <ProductJar /> : null}
      {tone === "bottle" ? <ProductBottle /> : null}
    </div>
  );
}

export function PromoMockup() {
  return (
    <div className={`grid gap-4 ${visualCardClass} bg-[linear-gradient(140deg,#fff6ed,rgba(244,200,91,0.22))] p-5 lg:grid-cols-[0.95fr_1.05fr]`}>
      <div className="space-y-4 text-[color:var(--brand-ink)]">
        <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Combo offer
        </span>
        <h3 className="font-display text-5xl leading-[0.9]">Get more for less.</h3>
        <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)]">
          This placeholder matches the horizontal promo role of the reference without relying on final photography yet.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.35rem] border border-[color:var(--line)] bg-white p-4">
          <div className="flex h-full items-center justify-center rounded-[1.15rem] bg-[color:var(--brand-soft)]/75">
            <Package className="size-16 text-[color:var(--brand-ink)]" strokeWidth={1.4} />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[1.2rem] border border-[color:var(--line)] bg-white p-4">
            <Gift className="mb-3 size-6 text-[color:var(--brand-ink)]" strokeWidth={1.7} />
            <div className="h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-[color:var(--brand-ink)]/10" />
          </div>
          <div className="rounded-[1.2rem] border border-[color:var(--line)] bg-white p-4">
            <Sparkles className="mb-3 size-6 text-[color:var(--brand-ink)]" strokeWidth={1.7} />
            <div className="h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
            <div className="mt-2 h-2 w-3/4 rounded-full bg-[color:var(--brand-ink)]/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutMockup() {
  return (
    <div className={`${visualCardClass} bg-[linear-gradient(145deg,rgba(233,241,232,0.7),rgba(255,255,255,1))] p-5`}>
      <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.3rem] border border-[color:var(--line)] bg-white p-4">
          <div className="grid h-full gap-3 rounded-[1.15rem] bg-[color:var(--brand-soft)]/70 p-4 sm:grid-cols-2">
            <div className="rounded-[1rem] bg-white/85 p-4">
              <div className="h-full min-h-24 rounded-[1rem] bg-[linear-gradient(180deg,#f6d47d,#e7b256)]" />
            </div>
            <div className="rounded-[1rem] bg-white/85 p-4">
              <div className="h-full min-h-24 rounded-[1rem] bg-[linear-gradient(180deg,#c9dfcf,#8bb497)]" />
            </div>
            <div className="rounded-[1rem] bg-white/85 p-4 sm:col-span-2">
              <div className="h-full min-h-28 rounded-[1rem] bg-[linear-gradient(180deg,#fff1e3,#efc3a0)]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-[1.3rem] border border-dashed border-[color:var(--line)] bg-white/80 p-4 text-center text-[color:var(--brand-ink)]">
          <div>
            <Leaf className="mx-auto mb-4 size-8" strokeWidth={1.7} />
            <p className="font-display text-3xl leading-none">Image placeholder</p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Swap in brand photography whenever you are ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
