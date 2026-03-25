"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ArrowRight, ShoppingCart, Truck, X } from "lucide-react";

type CartDrawerContextValue = {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartCount: number;
};

const CartDrawerContext = createContext<CartDrawerContextValue | null>(null);

function CartDrawer({ open, onClose, cartCount }: { open: boolean; onClose: () => void; cartCount: number }) {
  const freeShippingThreshold = 799;
  const cartTotal = 0;
  const amountRemaining = Math.max(freeShippingThreshold - cartTotal, 0);
  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.setAttribute("data-scroll-locked", "true");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.removeAttribute("data-scroll-locked");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-[90] ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-[rgba(17,24,39,0.22)] backdrop-blur-[3px] transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside data-lenis-prevent
        className={`absolute inset-y-0 right-0 flex w-[88vw] max-w-[390px] flex-col bg-white shadow-[-18px_0_44px_rgba(15,23,42,0.16)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:max-w-[430px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between border-b border-[color:var(--line)] px-5 py-4 md:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Shopping bag</p>
            <h2 className="mt-1 text-xl font-semibold text-[color:var(--brand-ink)]">Your cart</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--brand-ink)] transition hover:bg-[color:var(--brand-soft)]"
          >
            <X className="size-[18px]" strokeWidth={2.1} />
          </button>
        </div>

        <div className="flex items-center gap-3 border-b border-[color:var(--line)] bg-[color:var(--brand-soft)]/45 px-5 py-3 text-sm text-[color:var(--brand-ink)] md:px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[color:var(--brand-ink)] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
            <Truck className="size-5" strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-semibold">{cartCount === 0 ? "Your bag is empty for now" : "You are close to free shipping"}</p>
            <p className="mt-0.5 text-[13px] text-[color:var(--muted)]">Premium pantry staples, oils, and bundles will appear here.</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 py-10 md:px-6 md:py-12">
          <div className="mx-auto flex max-w-[270px] flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--brand-soft)]/55 text-[color:var(--brand-ink)] shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
              <ShoppingCart className="size-10" strokeWidth={1.7} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[color:var(--brand-ink)]">No products in the cart</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Add cold-pressed oils, pantry staples, or curated bundles to begin your order.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(33,77,58,0.18)] transition hover:bg-[#18392b]"
            >
              Continue shopping
              <ArrowRight className="size-4" strokeWidth={1.9} />
            </button>
          </div>
        </div>

        <div className="border-t border-[color:var(--line)] px-5 py-4 md:px-6">
          <div className="flex items-center justify-between gap-3 text-sm">
            <p className="font-medium text-[color:var(--foreground)]">
              You are <span className="font-semibold text-[color:var(--brand-ink)]">Rs. {amountRemaining}</span> away from free shipping.
            </p>
            <span className="text-[color:var(--muted)]">Rs. {freeShippingThreshold}</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[color:var(--line)]/70">
            <div
              className="h-full rounded-full bg-[color:var(--brand-ink)] transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

export function CartDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = 0;

  const value = useMemo(
    () => ({
      isOpen,
      cartCount,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <CartDrawerContext.Provider value={value}>
      {children}
      <CartDrawer open={isOpen} onClose={() => setIsOpen(false)} cartCount={cartCount} />
    </CartDrawerContext.Provider>
  );
}

export function useCartDrawer() {
  const context = useContext(CartDrawerContext);

  if (!context) {
    throw new Error("useCartDrawer must be used within CartDrawerProvider");
  }

  return context;
}

