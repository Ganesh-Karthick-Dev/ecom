"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Search, ShoppingBag, ShoppingCart, UserRound } from "lucide-react";

import { useCartDrawer } from "@/components/landing/CartDrawerProvider";
import { MobileSidebar } from "@/components/landing/MobileSidebar";
import { SearchOverlay } from "@/components/landing/SearchOverlay";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPanelTop, setSearchPanelTop] = useState({ desktop: 0, mobile: 0 });

  const desktopHeaderRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLLabelElement>(null);
  const { openCart, cartCount } = useCartDrawer();

  function updateSearchPanelTop() {
    setSearchPanelTop({
      desktop: desktopHeaderRef.current?.getBoundingClientRect().bottom ?? 0,
      mobile: mobileSearchRef.current?.getBoundingClientRect().bottom ?? 0,
    });
  }

  function openSearch() {
    updateSearchPanelTop();
    setIsSearchOpen(true);
  }

  function closeSearch() {
    setIsSearchOpen(false);
  }

  function handleSearchChange(value: string) {
    if (!isSearchOpen) {
      updateSearchPanelTop();
      setIsSearchOpen(true);
    }

    setSearchQuery(value);
  }

  function handleChipSelect(term: string) {
    setSearchQuery(term);
    updateSearchPanelTop();
    setIsSearchOpen(true);
  }

  useEffect(() => {
    if (!isSearchOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    const handleResize = () => {
      updateSearchPanelTop();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSearchOpen]);

  return (
    <>
      <header className="w-full bg-white md:border-b md:border-[color:var(--line)]">
        <div className="md:hidden bg-[color:var(--brand-ink)] px-4 pb-3 pt-3 text-white">
          <div className="mx-auto max-w-[430px]">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                aria-label="Open menu"
                aria-expanded={isSidebarOpen}
                aria-controls="mobile-sidebar"
                onClick={() => {
                  closeSearch();
                  setIsSidebarOpen(true);
                }}
              >
                <Menu className="size-5" strokeWidth={2} />
              </button>

              <div className="text-center leading-none">
                <p className="text-[1.95rem] font-semibold tracking-[-0.05em] text-white">Your logo</p>
              </div>

              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  aria-label="Account"
                >
                  <UserRound className="size-[18px]" strokeWidth={1.9} />
                </button>
                <button
                  type="button"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  aria-label="Open cart"
                  onClick={() => {
                    closeSearch();
                    openCart();
                  }}
                >
                  <ShoppingCart className="size-[18px]" strokeWidth={1.9} />
                  <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[color:var(--sun)] px-1 text-[9px] font-bold text-[color:var(--brand-ink)]">
                    {cartCount}
                  </span>
                </button>
              </div>
            </div>

            <label
              ref={mobileSearchRef}
              className={isSearchOpen
                ? "mt-3 flex items-center gap-3 rounded-md border border-white/60 bg-white px-4 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
                : "mt-3 flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"}
              onClick={openSearch}
            >
              <input
                value={searchQuery}
                onFocus={openSearch}
                onChange={(event) => handleSearchChange(event.target.value)}
                className="w-full bg-transparent text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted)]"
                placeholder="Search bundles"
                aria-label="Search"
              />
              <Search className="size-4 shrink-0 text-[color:var(--brand-ink)]" strokeWidth={1.9} />
            </label>
          </div>
        </div>

        <div className="hidden w-full px-4 py-3 sm:px-6 xl:px-8 2xl:px-10 md:block">
          <div ref={desktopHeaderRef} className="relative hidden min-h-[56px] items-center md:flex">
            <div className="hidden flex-none pr-4 md:block md:w-[340px] lg:w-[400px] xl:w-[440px]">
              <label
                className={isSearchOpen
                  ? "flex items-center gap-3 rounded-full border border-[color:var(--brand-ink)]/20 bg-white px-5 py-2.5 shadow-[0_12px_28px_rgba(33,77,58,0.1)]"
                  : "flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-white px-5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"}
                onClick={openSearch}
              >
                <Search className="size-4 text-[color:var(--brand-ink)]" strokeWidth={1.8} />
                <input
                  value={searchQuery}
                  onFocus={openSearch}
                  onChange={(event) => handleSearchChange(event.target.value)}
                  className="w-full bg-transparent text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted)]"
                  placeholder="Search bundles"
                  aria-label="Search"
                />
              </label>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-display text-[2.85rem] leading-none text-[color:var(--brand-ink)] xl:text-[3.15rem]">
                Your logo
              </p>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-ink)] transition hover:border-[color:var(--brand-ink)]/25"
              >
                <UserRound className="size-4" strokeWidth={1.8} />
                Account
              </button>
              <button
                type="button"
                onClick={() => {
                  closeSearch();
                  openCart();
                }}
                className="relative inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-ink)] px-5 py-2.5 pr-11 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(33,77,58,0.14)] transition hover:bg-[#18392b]"
              >
                <ShoppingBag className="size-4" strokeWidth={1.8} />
                Cart
                <span className="absolute right-3 top-1/2 flex h-5 min-w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--sun)] px-1 text-[10px] font-bold text-[color:var(--brand-ink)]">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay
        open={isSearchOpen}
        query={searchQuery}
        desktopTop={searchPanelTop.desktop}
        mobileTop={searchPanelTop.mobile}
        onChipClick={handleChipSelect}
        onClose={closeSearch}
      />

      <div id="mobile-sidebar">
        <MobileSidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </>
  );
}
