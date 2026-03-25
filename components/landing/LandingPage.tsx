import { AboutSection } from "@/components/landing/AboutSection";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { AudienceGoalsPanel } from "@/components/landing/AudienceGoalsPanel";
import { CartDrawerProvider } from "@/components/landing/CartDrawerProvider";
import { CategoryGrid } from "@/components/landing/CategoryGrid";
import { DesktopNav } from "@/components/landing/DesktopNav";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroCarousel } from "@/components/landing/HeroCarousel";
import { MobileBottomToolbar } from "@/components/landing/MobileBottomToolbar";
import { productSections } from "@/components/landing/data";
import { ProductRail } from "@/components/landing/ProductRail";
import { PromoBanner } from "@/components/landing/PromoBanner";
import { SectionDivider } from "@/components/landing/SectionDivider";
import { Testimonials } from "@/components/landing/Testimonials";
import { TrustStrip } from "@/components/landing/TrustStrip";

export function LandingPage() {
  return (
    <CartDrawerProvider>
      <div className="bg-white text-[color:var(--foreground)]">
        <AnnouncementBar />
        <div className="sticky top-0 z-40 bg-white">
          <Header />
          <DesktopNav />
        </div>
        <main className="pb-24 md:pb-0">
          <HeroCarousel />
          <SectionDivider />
          <CategoryGrid />
          <ProductRail section={productSections[0]} />
          <AudienceGoalsPanel />
          <ProductRail section={productSections[1]} />
          <PromoBanner />
          <ProductRail section={productSections[2]} />
          <ProductRail section={productSections[3]} />
          <ProductRail section={productSections[4]} />
          <AboutSection />
          <FeatureGrid />
          <Testimonials />
        </main>
        <TrustStrip />
        <Footer />
        <MobileBottomToolbar />
      </div>
    </CartDrawerProvider>
  );
}
