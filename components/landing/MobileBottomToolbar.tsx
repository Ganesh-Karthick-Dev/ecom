"use client";

import { House, MessageCircle, PackageSearch, ShoppingBasket, ShoppingCart } from "lucide-react";

import { useCartDrawer } from "@/components/landing/CartDrawerProvider";

export function MobileBottomToolbar() {
  const { openCart, cartCount } = useCartDrawer();

  const items = [
    { label: "Home", icon: House },
    { label: "My Orders", icon: PackageSearch },
    { label: "Shop", icon: ShoppingBasket, raised: true },
    { label: "Cart", icon: ShoppingCart, badge: String(cartCount), action: openCart },
    { label: "Whatsapp", icon: MessageCircle },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="mx-auto max-w-[430px] border-t border-[color:var(--line)] bg-white/98 px-2.5 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2 shadow-[0_-12px_34px_rgba(33,77,58,0.12)] backdrop-blur-xl">
        <div className="grid grid-cols-5 items-end gap-1">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                className={
                  item.raised
                    ? "relative -mt-5 flex min-h-[62px] flex-col items-center justify-center gap-1 rounded-[1.2rem] bg-[color:var(--brand-ink)] px-2 py-3 text-white shadow-[0_18px_34px_rgba(33,77,58,0.24)]"
                    : "relative flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-2xl px-2 py-1.5 text-[color:var(--brand-ink)]"
                }
              >
                <Icon className={item.raised ? "size-[18px]" : "size-4"} strokeWidth={1.9} />
                <span className={item.raised ? "text-[11px] font-semibold" : "text-[10px] font-medium"}>{item.label}</span>
                {item.badge ? (
                  <span className="absolute right-3 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[color:var(--sun)] px-1 text-[9px] font-bold text-[color:var(--brand-ink)]">
                    {item.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
