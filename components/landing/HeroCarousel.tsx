"use client";

import Image from "next/image";
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { heroSlides } from "@/components/landing/data";

const AUTO_DELAY = 6500;
const SWIPE_THRESHOLD = 52;

const heroImageAssets = {
  community: {
    src: "/images/landingpage/3.png",
    width: 2752,
    height: 1536,
    position: "center center",
  },
  pantry: {
    src: "/images/landingpage/image2.png",
    width: 2752,
    height: 1536,
    position: "center center",
  },
  gift: {
    src: "/images/landingpage/combo2.png",
    width: 2400,
    height: 1792,
    position: "center center",
  },
} as const;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const isPaused = userPaused || isHovered;
  const activeAsset = heroImageAssets[heroSlides[activeIndex].visual];

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
    <section className="relative w-full bg-white" aria-label="Featured collections" aria-roledescription="carousel">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="relative w-full overflow-hidden bg-white"
          style={{ aspectRatio: `${activeAsset.width} / ${activeAsset.height}` }}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
          >
            {heroSlides.map((slide, index) => {
              const asset = heroImageAssets[slide.visual];

              return (
                <article key={slide.title} className="relative min-w-full bg-white">
                  <Image
                    src={asset.src}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: asset.position }}
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(17,24,39,0.18))]" />
                </article>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 hidden md:block lg:bottom-6">
          <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-3 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 xl:px-12">
            <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/88 px-3 py-2 shadow-[0_16px_34px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className={
                      isActive
                        ? "h-2.5 w-8 rounded-full bg-[color:var(--brand-ink)] transition-all duration-300"
                        : "h-2.5 w-2.5 rounded-full bg-[color:var(--brand-ink)]/28 transition-all duration-300 hover:bg-[color:var(--brand-ink)]/45"
                    }
                  />
                );
              })}
            </div>

            <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/88 p-2 shadow-[0_16px_34px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goToPrevious}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--brand-ink)] transition hover:bg-[color:var(--brand-soft)]"
              >
                <ChevronLeft className="size-5" strokeWidth={1.9} />
              </button>
              <button
                type="button"
                aria-label={userPaused ? "Resume autoplay" : "Pause autoplay"}
                onClick={() => setUserPaused((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-ink)] text-white transition hover:bg-[#18392b]"
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
                onClick={goToNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--brand-ink)] transition hover:bg-[color:var(--brand-soft)]"
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

