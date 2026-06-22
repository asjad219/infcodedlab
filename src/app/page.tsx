import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import StorytellingScroll from "@/components/StorytellingScroll";
import BentoGrid from "@/components/BentoGrid";
import UseCaseSection from "@/components/UseCaseSection";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FeeSync",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All/Web/Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "124"
  }
};

export default function Home() {
  return (
    <>
      {/* SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <StorytellingScroll />
        <BentoGrid />
        <UseCaseSection />
        <ScreenshotShowcase />
        <RoiCalculator />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
