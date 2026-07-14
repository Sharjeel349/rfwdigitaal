"use client";

import Navbar from "@/components/Navbar";
import ProjectDiscussionSection from "@/components/ProjectDiscussionSection";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/content";
import ServicesHero from "./components/ServicesHero";
import CardsGrid from "./components/CardsGrid";
import CultureThinking from "./components/CultureThinking";
import VisionaryStorytelling from "./components/VisionaryStorytelling";
import RevolutionizeMarketing from "./components/RevolutionizeMarketing";

export default function ServicesPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main className="flex-1 bg-white relative">
        
        {/* Glow Spheres for Premium Visuals */}
        <div className="pointer-events-none absolute top-[618px] right-[5%] w-[292px] h-[292px] rounded-full bg-gradient-to-b from-[rgba(255,63,0,0.18)] to-transparent blur-[25px] z-0 select-none"></div>
        <div className="pointer-events-none absolute top-[258px] left-[5%] w-[326px] h-[326px] rounded-full bg-[#FF3F00]/10 blur-[80px] z-0 select-none"></div>

        {/* Hero Header Section */}
        <ServicesHero />

        {/* 3 Services Cards Showcase Section */}
        <CardsGrid />

        {/* Section 1: Culture-Driven Creative Thinking Detail */}
        <CultureThinking />

        {/* Section 2: Visionary Storytelling Detail (Staggered Capsules) */}
        <VisionaryStorytelling />

        {/* Section 3: Revolutionize Marketing Detail */}
        <RevolutionizeMarketing />

        {/* Project discussion CTA section */}
        <ProjectDiscussionSection />
      </main>
      <Footer />
    </>
  );
}
