import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "Your Logo | Organic Pantry Landing",
  description:
    "A section-based ecommerce landing page for a modern pantry brand, rebuilt with real campaign imagery and a stronger mobile-first system.",
};

export default function Home() {
  return <LandingPage />;
}
