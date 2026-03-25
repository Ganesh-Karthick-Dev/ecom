"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const createLenis = () => {
      lenis?.destroy();
      lenis = null;

      if (reducedMotionQuery.matches) {
        return;
      }

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.085,
        wheelMultiplier: 0.96,
        touchMultiplier: 1,
        overscroll: true,
        prevent: (node) => {
          if (!(node instanceof Element)) {
            return false;
          }

          return Boolean(node.closest("[data-lenis-prevent]"));
        },
        virtualScroll: () => !document.documentElement.hasAttribute("data-scroll-locked"),
      });
    };

    createLenis();
    reducedMotionQuery.addEventListener("change", createLenis);

    return () => {
      reducedMotionQuery.removeEventListener("change", createLenis);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
