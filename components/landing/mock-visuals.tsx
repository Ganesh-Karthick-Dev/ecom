import Image from "next/image";

type ProductTone = "bottle" | "jar" | "packet";

const visualCardClass =
  "relative overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[0_24px_60px_rgba(33,77,58,0.08)]";

const productAssets = [
  { src: "/images/landingpage/p1.png" },
  { src: "/images/landingpage/p2.png" },
  { src: "/images/landingpage/p3.png" },
  { src: "/images/landingpage/p4.png" },
  { src: "/images/landingpage/p5.png" },
] as const;

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function fallbackSurface(tone: ProductTone) {
  if (tone === "jar") {
    return "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(233,241,232,0.9))]";
  }

  if (tone === "bottle") {
    return "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,200,91,0.18))]";
  }

  return "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,238,226,0.86))]";
}

function assetForProduct(key: string) {
  const hash = Array.from(key).reduce((total, char) => total + char.charCodeAt(0), 0);
  return productAssets[hash % productAssets.length];
}

function FallbackBottle() {
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

function FallbackJar() {
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

function FallbackPacket() {
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

export function ProductMockup({
  tone,
  className,
  imageKey,
}: {
  tone: ProductTone;
  className?: string;
  imageKey?: string;
}) {
  const asset = imageKey ? assetForProduct(imageKey) : null;

  if (asset) {
    return (
      <div className={cn("relative overflow-hidden bg-[#f7f2ea]", className)}>
        <Image
          src={asset.src}
          alt={`${imageKey} product image`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_35%,rgba(255,255,255,0.12))]" />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", fallbackSurface(tone), className)}>
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0))]" />
      {tone === "packet" ? <FallbackPacket /> : null}
      {tone === "jar" ? <FallbackJar /> : null}
      {tone === "bottle" ? <FallbackBottle /> : null}
    </div>
  );
}

export function PromoMockup() {
  return (
    <div className={`${visualCardClass} p-0`}>
      <div className="relative aspect-[2400/1792] w-full overflow-hidden bg-white">
        <Image
          src="/images/landingpage/combo1.png"
          alt="Combo offer banner"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

export function AboutMockup() {
  return (
    <div className={`${visualCardClass} p-0`}>
      <div className="relative aspect-[2752/1536] w-full overflow-hidden bg-white">
        <Image
          src="/images/landingpage/harpi.png"
          alt="Harpi product range"
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
