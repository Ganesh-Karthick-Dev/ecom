"use client";

import {
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

import { heroSlides, type HeroSlide } from "@/components/landing/data";

const AUTO_DELAY = 6500;
const SWIPE_THRESHOLD = 52;

const heroThemes = {
  community: {
    surface: "bg-[linear-gradient(120deg,#fbfefc_0%,#eef6f0_40%,#dceadf_100%)]",
    orbOne: "bg-[radial-gradient(circle,rgba(33,77,58,0.2)_0%,rgba(33,77,58,0)_72%)]",
    orbTwo: "bg-[radial-gradient(circle,rgba(244,200,91,0.28)_0%,rgba(244,200,91,0)_72%)]",
    eyebrow: "border-white/70 bg-white/80",
    chip: "border-white/65 bg-white/76",
  },
  pantry: {
    surface: "bg-[linear-gradient(120deg,#fffdfa_0%,#fbf3dc_36%,#f0e1b7_100%)]",
    orbOne: "bg-[radial-gradient(circle,rgba(244,200,91,0.24)_0%,rgba(244,200,91,0)_72%)]",
    orbTwo: "bg-[radial-gradient(circle,rgba(33,77,58,0.12)_0%,rgba(33,77,58,0)_72%)]",
    eyebrow: "border-white/70 bg-white/82",
    chip: "border-white/70 bg-white/78",
  },
  gift: {
    surface: "bg-[linear-gradient(122deg,#fff9f3_0%,#fde7d1_38%,#f6cfad_100%)]",
    orbOne: "bg-[radial-gradient(circle,rgba(233,131,52,0.18)_0%,rgba(233,131,52,0)_72%)]",
    orbTwo: "bg-[radial-gradient(circle,rgba(33,77,58,0.14)_0%,rgba(33,77,58,0)_72%)]",
    eyebrow: "border-white/70 bg-white/82",
    chip: "border-white/72 bg-white/78",
  },
} as const;

function MockBottle({
  className,
  tint,
  label,
}: {
  className: string;
  tint: string;
  label: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`relative h-full w-full rounded-[2rem_2rem_1.2rem_1.2rem] border border-white/70 ${tint} shadow-[0_22px_45px_rgba(33,77,58,0.16)]`}
      >
        <div className="absolute left-1/2 top-3 h-5 w-10 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/25" />
        <div className="absolute inset-x-[18%] bottom-[16%] rounded-[0.9rem] bg-white/92 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
          {label}
        </div>
      </div>
    </div>
  );
}

function MockJar({
  className,
  tint,
  label,
}: {
  className: string;
  tint: string;
  label: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`relative h-full w-full rounded-[1.5rem] border border-white/72 ${tint} shadow-[0_22px_45px_rgba(33,77,58,0.14)]`}
      >
        <div className="absolute left-1/2 top-3 h-6 w-16 -translate-x-1/2 rounded-full bg-[color:var(--brand-ink)]/26" />
        <div className="absolute inset-x-[16%] bottom-[16%] rounded-[0.9rem] bg-white/92 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
          {label}
        </div>
      </div>
    </div>
  );
}

function MockPack({
  className,
  tint,
  label,
}: {
  className: string;
  tint: string;
  label: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`relative h-full w-full rounded-[1.7rem] border border-white/72 ${tint} shadow-[0_22px_45px_rgba(33,77,58,0.14)]`}
      >
        <div className="absolute inset-x-[14%] top-4 h-5 rounded-full bg-[color:var(--brand-ink)]/12" />
        <div className="absolute inset-x-[18%] bottom-[18%] rounded-[0.9rem] bg-white/92 px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
          {label}
        </div>
      </div>
    </div>
  );
}

function CommunityArtwork() {
  return (
    <div className="relative h-[320px] sm:h-[390px] lg:h-[500px]">
      <div className="absolute left-[4%] top-[8%] h-40 w-40 rounded-full bg-white/45 blur-3xl sm:h-48 sm:w-48" />
      <div className="absolute bottom-10 left-[2%] right-[10%] rounded-[2.4rem] border border-white/65 bg-white/54 p-5 shadow-[0_26px_70px_rgba(33,77,58,0.16)] backdrop-blur-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-[color:var(--line)]/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-ink)]">
            Signature range
          </span>
          <span className="text-xs font-medium text-[color:var(--muted)]">Mock campaign setup</span>
        </div>
        <div className="relative h-44 sm:h-52">
          <MockBottle
            className="bottom-0 left-[2%] h-28 w-16 sm:h-36 sm:w-20"
            tint="bg-[linear-gradient(180deg,#f2d37a,#cf8c43)]"
            label="Oil"
          />
          <MockBottle
            className="bottom-0 left-[22%] h-36 w-20 sm:h-44 sm:w-24"
            tint="bg-[linear-gradient(180deg,#f6df9a,#d29946)]"
            label="Press"
          />
          <MockJar
            className="bottom-0 left-[47%] h-32 w-24 sm:h-38 sm:w-28"
            tint="bg-[linear-gradient(180deg,#ffffff,#deeadf)]"
            label="Mix"
          />
          <MockBottle
            className="bottom-0 right-[4%] h-40 w-24 sm:h-48 sm:w-28"
            tint="bg-[linear-gradient(180deg,#d8eadb,#8cad94)]"
            label="Care"
          />
        </div>
      </div>

      <div className="absolute left-[2%] top-[10%] w-44 rounded-[1.7rem] border border-white/70 bg-white/82 p-4 shadow-[0_18px_45px_rgba(33,77,58,0.12)] backdrop-blur-xl sm:w-52">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Community favourite
        </p>
        <div className="mt-3 space-y-2">
          <div className="h-2 rounded-full bg-[color:var(--brand-ink)]/12" />
          <div className="h-2 w-4/5 rounded-full bg-[color:var(--brand-ink)]/10" />
          <div className="h-2 w-3/5 rounded-full bg-[color:var(--brand-ink)]/10" />
        </div>
      </div>

      <div className="absolute right-[2%] top-[4%] w-[185px] rounded-[2.3rem] border border-white/72 bg-white/82 p-4 shadow-[0_24px_60px_rgba(33,77,58,0.14)] backdrop-blur-xl sm:w-[230px] sm:p-5 lg:w-[280px]">
        <div className="mx-auto mb-4 h-4 w-20 rounded-full bg-[color:var(--brand-ink)]/12" />
        <div className="rounded-[1.8rem] border border-[color:var(--line)]/70 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(244,248,244,0.9))] p-4">
          <div className="mb-4 flex items-center justify-between text-[color:var(--brand-ink)]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Campaign</span>
            <Sparkles className="size-4" strokeWidth={1.8} />
          </div>
          <div className="space-y-2.5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-[1rem] border border-[color:var(--line)] bg-white/88 p-3">
                <div className="h-2 rounded-full bg-[color:var(--brand-ink)]/10" />
                <div className="mt-2 h-2 w-3/4 rounded-full bg-[color:var(--brand-ink)]/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PantryArtwork() {
  return (
    <div className="relative h-[320px] sm:h-[390px] lg:h-[500px]">
      <div className="absolute inset-x-[10%] top-[6%] bottom-[14%] rounded-[2.6rem_2.6rem_2rem_2rem] border border-white/68 bg-white/56 shadow-[0_30px_80px_rgba(33,77,58,0.14)] backdrop-blur-xl" />
      <div className="absolute inset-x-[16%] bottom-[10%] h-10 rounded-full bg-white/38 blur-2xl" />

      <div className="absolute left-[6%] top-[8%] rounded-full border border-white/72 bg-white/82 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink)] shadow-[0_14px_30px_rgba(33,77,58,0.1)]">
        Bestseller edit
      </div>

      <div className="absolute bottom-[14%] left-[18%] h-32 w-20 sm:h-40 sm:w-24">
        <MockBottle
          className="inset-0"
          tint="bg-[linear-gradient(180deg,#d5ead9,#88ab91)]"
          label="Daily"
        />
      </div>
      <div className="absolute bottom-[14%] left-[36%] h-38 w-24 sm:h-46 sm:w-28">
        <MockBottle
          className="inset-0"
          tint="bg-[linear-gradient(180deg,#f8e2a0,#d79a4a)]"
          label="Pure"
        />
      </div>
      <div className="absolute bottom-[14%] left-[58%] h-30 w-24 sm:h-38 sm:w-28">
        <MockJar
          className="inset-0"
          tint="bg-[linear-gradient(180deg,#ffffff,#ece8d6)]"
          label="Blend"
        />
      </div>
      <div className="absolute bottom-[14%] right-[12%] h-40 w-24 sm:h-48 sm:w-28">
        <MockBottle
          className="inset-0"
          tint="bg-[linear-gradient(180deg,#f1d27c,#c9853f)]"
          label="Gold"
        />
      </div>

      <div className="absolute right-[4%] top-[14%] w-40 rounded-[1.6rem] border border-white/72 bg-white/82 p-4 shadow-[0_18px_45px_rgba(33,77,58,0.12)] backdrop-blur-xl sm:w-48">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Replace with hero image
        </p>
        <div className="mt-3 rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(244,200,91,0.24),rgba(255,255,255,0.92))] p-3">
          <div className="h-20 rounded-[1rem] border border-dashed border-[color:var(--line)] bg-white/80" />
        </div>
      </div>
    </div>
  );
}

function GiftArtwork() {
  return (
    <div className="relative h-[320px] sm:h-[390px] lg:h-[500px]">
      <div className="absolute left-[6%] top-[8%] rounded-full border border-white/72 bg-white/84 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-ink)] shadow-[0_14px_30px_rgba(33,77,58,0.1)]">
        Limited offer
      </div>

      <div className="absolute left-[4%] bottom-[10%] h-44 w-[44%] rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,#ffffff,#f6e7d5)] p-4 shadow-[0_24px_60px_rgba(33,77,58,0.14)]">
        <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-dashed border-[color:var(--line)] bg-white/84 p-4">
          <span className="w-fit rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
            Premium hamper
          </span>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 rounded-[1rem] bg-[linear-gradient(180deg,#f0cf79,#d19145)]" />
            <div className="h-24 rounded-[1rem] bg-[linear-gradient(180deg,#dcebdd,#89ae92)]" />
            <div className="h-20 rounded-[1rem] bg-[linear-gradient(180deg,#fbe8d4,#eeb57e)]" />
          </div>
        </div>
      </div>

      <MockPack
        className="right-[22%] bottom-[16%] h-44 w-28 sm:h-52 sm:w-32"
        tint="bg-[linear-gradient(180deg,#ffffff,#f2dec8)]"
        label="Gift"
      />
      <MockPack
        className="right-[6%] bottom-[11%] h-52 w-32 sm:h-60 sm:w-36"
        tint="bg-[linear-gradient(180deg,#d9eadc,#90af97)]"
        label="Bundle"
      />

      <div className="absolute right-[2%] top-[16%] w-40 rounded-[1.6rem] border border-white/72 bg-white/84 p-4 shadow-[0_18px_45px_rgba(33,77,58,0.12)] backdrop-blur-xl sm:w-48">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Curated gifting
        </p>
        <div className="mt-3 space-y-2">
          <div className="h-2 rounded-full bg-[color:var(--brand-ink)]/12" />
          <div className="h-2 w-5/6 rounded-full bg-[color:var(--brand-ink)]/10" />
          <div className="h-2 w-3/5 rounded-full bg-[color:var(--brand-ink)]/10" />
        </div>
      </div>
    </div>
  );
}

function HeroArtwork({ slide }: { slide: HeroSlide }) {
  if (slide.visual === "community") {
    return <CommunityArtwork />;
  }

  if (slide.visual === "gift") {
    return <GiftArtwork />;
  }

  return <PantryArtwork />;
}

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const isPaused = userPaused || isHovered;

  const advanceSlide = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    });
  });

  function goToSlide(nextIndex: number) {
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  }

  function goToNext() {
    startTransition(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    });
  }

  function goToPrevious() {
    startTransition(() => {
      setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
    });
  }

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      advanceSlide();
    }, AUTO_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = touchStartRef.current;

    if (!start) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    touchStartRef.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
      return;
    }

    goToPrevious();
  }

  return (
    <section
      className="relative isolate w-full overflow-hidden border-b border-[color:var(--line)] bg-white"
      aria-label="Featured collections"
      aria-roledescription="carousel"
    >
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {heroSlides.map((slide, index) => {
            const theme = heroThemes[slide.visual];
            const isActive = index === activeIndex;

            return (
              <article key={slide.title} className={`relative min-w-full overflow-hidden ${theme.surface}`}>
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`absolute -left-12 top-0 h-56 w-56 blur-3xl sm:h-72 sm:w-72 ${theme.orbOne}`} />
                  <div className={`absolute right-0 top-[16%] h-52 w-52 blur-3xl sm:h-72 sm:w-72 ${theme.orbTwo}`} />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.52))]" />
                </div>

                <div className="relative mx-auto grid min-h-[760px] max-w-[1500px] gap-10 px-4 py-10 pb-28 sm:px-6 sm:py-12 sm:pb-28 lg:min-h-[640px] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-8 lg:px-8 lg:py-16 lg:pb-24 xl:px-12">
                  <div
                    className={`max-w-[640px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-40"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--brand-ink)] shadow-[0_12px_26px_rgba(33,77,58,0.08)] backdrop-blur ${theme.eyebrow}`}
                    >
                      <Sparkles className="size-3.5" strokeWidth={1.9} />
                      {slide.eyebrow}
                    </span>

                    <h1 className="mt-5 font-display text-[3.45rem] leading-[0.88] text-[color:var(--brand-ink)] sm:text-[4.5rem] lg:text-[5.2rem] xl:text-[6rem]">
                      {slide.title} <span className="text-[color:var(--accent)]">{slide.accent}</span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
                      {slide.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {slide.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-[color:var(--brand-ink)] shadow-[0_10px_24px_rgba(33,77,58,0.06)] backdrop-blur ${theme.chip}`}
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(33,77,58,0.22)] transition duration-200 hover:bg-[#18392b]"
                      >
                        {slide.cta}
                        <ArrowRight className="size-4" strokeWidth={1.9} />
                      </button>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-ink)] transition duration-200 hover:text-[color:var(--accent)]"
                      >
                        View all collections
                        <ArrowRight className="size-4" strokeWidth={1.9} />
                      </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--muted)]">
                      <span>Cold-pressed essentials</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-ink)]/30" />
                      <span>Pantry-first curation</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-ink)]/30" />
                      <span>Gift-ready bundles</span>
                    </div>
                  </div>

                  <div
                    className={`relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.985] opacity-50"
                    }`}
                  >
                    <HeroArtwork slide={slide} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-4 pb-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 xl:px-12">
            <div className="pointer-events-auto flex flex-wrap items-end gap-2 rounded-[1.4rem] border border-white/70 bg-white/80 p-3 shadow-[0_18px_40px_rgba(33,77,58,0.12)] backdrop-blur-xl sm:p-4">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className="min-w-[72px] cursor-pointer rounded-[1rem] px-2 py-1 text-left transition duration-200 hover:bg-[color:var(--brand-soft)]/70"
                  >
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-[color:var(--brand-ink)]/12">
                      {isActive ? (
                        <span
                          key={`${slide.title}-${activeIndex}`}
                          className="block h-full origin-left animate-[hero-progress_linear_forwards] rounded-full bg-[color:var(--brand-ink)]"
                          style={{
                            animationDuration: `${AUTO_DELAY}ms`,
                            animationPlayState: isPaused ? "paused" : "running",
                          }}
                        />
                      ) : (
                        <span className="block h-full w-2 rounded-full bg-[color:var(--brand-ink)]/28" />
                      )}
                    </span>
                    <span className="mt-2 block text-xs font-medium text-[color:var(--brand-ink)]/88">
                      {slide.eyebrow}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pointer-events-auto inline-flex w-fit items-center gap-2 self-start rounded-full border border-white/70 bg-white/82 p-2 shadow-[0_18px_40px_rgba(33,77,58,0.12)] backdrop-blur-xl">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goToPrevious()}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[color:var(--brand-ink)] transition duration-200 hover:bg-[color:var(--brand-soft)]"
              >
                <ChevronLeft className="size-5" strokeWidth={1.9} />
              </button>
              <button
                type="button"
                aria-label={userPaused ? "Resume autoplay" : "Pause autoplay"}
                onClick={() => setUserPaused((current) => !current)}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[color:var(--brand-ink)] text-white transition duration-200 hover:bg-[#18392b]"
              >
                {userPaused ? (
                  <Play className="size-[18px]" strokeWidth={1.9} />
                ) : (
                  <Pause className="size-[18px]" strokeWidth={1.9} />
                )}
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goToNext()}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[color:var(--brand-ink)] transition duration-200 hover:bg-[color:var(--brand-soft)]"
              >
                <ChevronRight className="size-5" strokeWidth={1.9} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
