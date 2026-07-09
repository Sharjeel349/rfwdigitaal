import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import CultureSection from "@/components/CultureSection";
import QuoteSection from "@/components/QuoteSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectDiscussionSection from "@/components/ProjectDiscussionSection";
import Footer from "@/components/Footer";

import {
  NAV_LINKS,
  HERO_CONTENT,
  SERVICES_CONTENT,
  CULTURE_CONTENT,
  QUOTE_CONTENT,
  PORTFOLIO_CONTENT,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main className="flex-1">
        <HeroSection content={HERO_CONTENT} />
        <ServiceSection content={SERVICES_CONTENT} />
        <QuoteSection
          quoteItem={QUOTE_CONTENT}
          introTitle={PORTFOLIO_CONTENT.sectionTitle}
          introDescription={PORTFOLIO_CONTENT.sectionDescription}
        />
        <PortfolioSection items={PORTFOLIO_CONTENT.items} />
        <CultureSection content={CULTURE_CONTENT} />
        <TestimonialsSection />
        <ProjectDiscussionSection />
      </main>
      <Footer />
    </>
  );
}
