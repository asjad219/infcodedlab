import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import StorytellingScroll from "@/components/StorytellingScroll";
import BentoGrid from "@/components/BentoGrid";
import UseCaseSection from "@/components/UseCaseSection";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhoIsItFor from "@/components/WhoIsItFor";
import HowItWorks from "@/components/HowItWorks";

const jsonLd = [
  {
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FeeSync",
    "url": "https://feesync.in",
    "logo": "https://feesync.in/icon.png",
    "sameAs": [
      "https://twitter.com/FeeSync",
      "https://linkedin.com/company/feesync"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FeeSync?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FeeSync is an automated fee management system designed for coaching institutes, tutors, and academies to track payments, send automated WhatsApp reminders, and manage student batches."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use bank-grade encryption to secure all student and financial data. We never share or sell your data to third parties."
        }
      }
    ]
  }
];

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
        <HowItWorks />
        <WhoIsItFor />
        <UseCaseSection />
        <InteractiveShowcase />
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
