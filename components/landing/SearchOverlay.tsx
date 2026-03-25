"use client";

import { Sparkles, X } from "lucide-react";

import { productSections, type Product } from "@/components/landing/data";
import { ProductMockup } from "@/components/landing/mock-visuals";

type SearchOverlayProps = {
  open: boolean;
  query: string;
  desktopTop: number;
  mobileTop: number;
  onChipClick: (term: string) => void;
  onClose: () => void;
};

type SearchCatalogItem = Product & {
  id: string;
  keywords: string[];
};

const trendingTerms = ["Cold Pressed", "Sweeteners", "Millet", "Fitness"];

const searchCatalog: SearchCatalogItem[] = productSections.flatMap((section) => {
  const sectionKeywords = [section.title, section.subtitle];

  if (section.products) {
    return section.products.map((product) => ({
      ...product,
      id: product.name,
      keywords: [...sectionKeywords, ...product.tags, ...product.sizes],
    }));
  }

  return (section.tabs ?? []).flatMap((tab) =>
    tab.products.map((product) => ({
      ...product,
      id: `${tab.id}-${product.name}`,
      keywords: [...sectionKeywords, tab.label, ...product.tags, ...product.sizes],
    })),
  );
});

function amountFrom(value: string) {
  return Number(value.replace(/[^\d.]/g, ""));
}

function discountFor(product: Product) {
  const price = amountFrom(product.price);
  const compareAt = amountFrom(product.compareAt);

  if (!price || !compareAt || compareAt <= price) {
    return null;
  }

  return Math.round(((compareAt - price) / compareAt) * 100);
}

function SearchProductCard({ product, compact = false }: { product: SearchCatalogItem; compact?: boolean }) {
  const discount = discountFor(product);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1rem] border border-[color:var(--line)] bg-white shadow-[0_16px_34px_rgba(33,77,58,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(33,77,58,0.1)]">
      <div className="aspect-[2400/1792] w-full border-b border-[color:var(--line)] bg-[#f7f2ea]">
        <ProductMockup tone={product.tone} imageKey={product.name} className="h-full w-full" />
      </div>
      <div className={compact ? "flex flex-1 flex-col p-3" : "flex flex-1 flex-col p-4"}>
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full bg-[color:var(--brand-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-ink)]">
            {product.tags[0]}
          </span>
          {discount ? (
            <span className="rounded-full bg-[#ea5f53] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              {discount}% off
            </span>
          ) : null}
        </div>
        <h3 className={compact ? "mt-3 text-[15px] font-semibold leading-5 text-[color:var(--brand-ink)]" : "mt-3 text-base font-semibold leading-6 text-[color:var(--brand-ink)]"}>
          {product.name}
        </h3>
        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className={compact ? "text-xl font-semibold text-[color:var(--brand-ink)]" : "text-2xl font-semibold text-[color:var(--brand-ink)]"}>
                {product.price}
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)] line-through">{product.compareAt}</p>
            </div>
            <button
              type="button"
              className={compact
                ? "inline-flex rounded-md bg-[color:var(--brand-ink)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
                : "inline-flex rounded-md bg-[color:var(--brand-ink)] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function EmptySearchState({ query }: { query: string }) {
  return (
    <div className="rounded-[1.2rem] border border-dashed border-[color:var(--line)] bg-white/85 px-6 py-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">No direct matches</p>
      <h3 className="mt-3 font-display text-3xl leading-none text-[color:var(--brand-ink)]">
        Nothing yet for &quot;{query}&quot;
      </h3>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[color:var(--muted)]">
        Try one of the trending keywords above to quickly jump into the strongest product suggestions.
      </p>
    </div>
  );
}

function SearchPanelBody({
  compact = false,
  query,
  results,
  onChipClick,
  onClose,
}: {
  compact?: boolean;
  query: string;
  results: SearchCatalogItem[];
  onChipClick: (term: string) => void;
  onClose: () => void;
}) {
  const heading = query.trim() ? `Results for "${query.trim()}"` : "You May Also Like";

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-ink)]">
            <Sparkles className="size-4" strokeWidth={1.9} />
            Now Trending
          </div>
          <div className={compact ? "mt-3 flex flex-wrap gap-2" : "mt-4 flex flex-wrap gap-3"}>
            {trendingTerms.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => onChipClick(term)}
                className={compact
                  ? "rounded-md bg-[color:var(--brand-ink)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                  : "rounded-md bg-[color:var(--brand-ink)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--brand-ink)] transition hover:bg-[color:var(--brand-soft)]"
        >
          <X className="size-5" strokeWidth={2} />
        </button>
      </div>

      <div className={compact ? "mt-5" : "mt-8 flex items-end justify-between gap-4"}>
        <h2 className={compact ? "font-display text-[2.15rem] leading-none text-[color:var(--brand-ink)]" : "font-display text-5xl leading-none text-[color:var(--brand-ink)]"}>
          {heading}
        </h2>
        {!compact ? (
          <p className="text-sm font-medium text-[color:var(--muted)]">{results.length} curated picks</p>
        ) : null}
      </div>

      {results.length ? (
        <div className={compact ? "mt-4 grid grid-cols-2 gap-3 pb-1" : "mt-7 grid gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}>
          {results.map((product) => (
            <SearchProductCard key={product.id} product={product} compact={compact} />
          ))}
        </div>
      ) : (
        <div className={compact ? "mt-4" : "mt-7"}>
          <EmptySearchState query={query.trim()} />
        </div>
      )}
    </div>
  );
}

export function SearchOverlay({
  open,
  query,
  desktopTop,
  mobileTop,
  onChipClick,
  onClose,
}: SearchOverlayProps) {
  if (!open) {
    return null;
  }

  const needle = query.trim().toLowerCase();
  const results = searchCatalog
    .filter((product) => {
      if (!needle) {
        return true;
      }

      const searchable = [product.name, ...product.keywords].join(" ").toLowerCase();
      return searchable.includes(needle);
    })
    .slice(0, 10);

  return (
    <>
      <div className="hidden md:block">
        <button
          type="button"
          aria-label="Close search results"
          onClick={onClose}
          className="fixed inset-x-0 bottom-0 z-[59] bg-[rgba(15,23,42,0.18)] backdrop-blur-[2px]"
          style={{ top: desktopTop }}
        />
        <div
          className="search-surface-enter fixed inset-x-0 bottom-0 z-[60] hidden overflow-hidden bg-[linear-gradient(180deg,#ffffff,#f7faf6)] md:block"
          style={{ top: desktopTop }}
        >
          <div data-lenis-prevent className="mx-auto h-full max-w-[1560px] overflow-y-auto px-5 pb-8 pt-6 sm:px-6 lg:px-8">
            <SearchPanelBody query={query} results={results} onChipClick={onChipClick} onClose={onClose} />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <button
          type="button"
          aria-label="Close search results"
          onClick={onClose}
          className="fixed inset-x-0 bottom-0 z-[59] bg-[rgba(15,23,42,0.16)] backdrop-blur-[2px]"
          style={{ top: mobileTop }}
        />
        <div
          className="search-surface-enter fixed left-1/2 z-[60] w-[calc(100vw-24px)] max-w-[430px] -translate-x-1/2 overflow-hidden rounded-[1rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,#ffffff,#f8faf7)] shadow-[0_24px_44px_rgba(15,23,42,0.16)]"
          style={{ top: mobileTop + 8 }}
        >
          <div data-lenis-prevent className="max-h-[62vh] overflow-y-auto px-4 pb-4 pt-4">
            <SearchPanelBody compact query={query} results={results} onChipClick={onChipClick} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}

