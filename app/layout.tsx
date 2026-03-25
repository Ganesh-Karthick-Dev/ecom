import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Your Logo | Organic Pantry Landing",
  description: "Premium organic pantry landing page with refined sections, strong mobile UX, and polished ecommerce interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
