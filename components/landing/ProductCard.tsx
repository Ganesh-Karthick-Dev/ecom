import { ShoppingBag } from "lucide-react";

import type { Product } from "@/components/landing/data";
import { ProductMockup } from "@/components/landing/mock-visuals";

function PriceRow({ price, compareAt }: { price: string; compareAt: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="text-xl font-semibold text-[color:var(--brand-ink)]">{price}</span>
      <span className="text-sm text-[color:var(--muted)] line-through">{compareAt}</span>
      <span className="rounded-full bg-[#ea5f53] px-2.5 py-1 text-xs font-semibold text-white">
        Save 20%
      </span>
    </div>
  );
}

function SizeChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={
        active
          ? "rounded-full bg-[color:var(--sun)] px-3 py-2 text-xs font-semibold text-[color:var(--brand-ink)]"
          : "rounded-full border border-[color:var(--line)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--muted)]"
      }
    >
      {label}
    </button>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[1.05rem] border border-[color:var(--line)] bg-white shadow-[0_14px_34px_rgba(33,77,58,0.05)] transition-shadow duration-200 hover:shadow-[0_20px_38px_rgba(33,77,58,0.08)]">
      <div className="h-56 w-full border-b border-[color:var(--line)] sm:h-60">
        <ProductMockup tone={product.tone} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div>
          <h3 className="text-lg font-semibold leading-6 text-[color:var(--brand-ink)]">
            {product.name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[color:var(--brand-soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-ink)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <PriceRow price={product.price} compareAt={product.compareAt} />
        </div>
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
              <SizeChip key={size} label={size} active={index === 0} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)] bg-[color:var(--brand-ink)] px-4 py-3 sm:px-5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white"
        >
          <ShoppingBag className="size-4" strokeWidth={1.9} />
          Add to cart
        </button>
      </div>
    </article>
  );
}
