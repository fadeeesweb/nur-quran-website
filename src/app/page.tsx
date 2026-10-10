import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SourceStrip } from "@/components/SourceStrip";
import { AppPreview } from "@/components/AppPreview";
import { Features } from "@/components/Features";
import { QuranExperience } from "@/components/QuranExperience";
import { RecitationSection } from "@/components/RecitationSection";
import { TafsirSection } from "@/components/TafsirSection";
import { ToolsSection } from "@/components/ToolsSection";
import { WhySection } from "@/components/WhySection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";
import { DownloadCta } from "@/components/DownloadCta";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SourceStrip />
      <AppPreview />
      <Features />
      <QuranExperience />
      <RecitationSection />
      <TafsirSection />
      <ToolsSection />
      <WhySection />
      <ProductShowcase />
      <Testimonials />
      <DownloadCta />
    </>
  );
}
