"use client";

import Navbar from "@/components/Navbar";
import ProjectDiscussionSection from "@/components/ProjectDiscussionSection";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/content";
import WorkHero from "./components/WorkHero";
import MockupCarousel from "./components/MockupCarousel";

export default function WorkPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main className="flex-1 bg-white relative">
        {/* Glowing Background Accents */}
        <div className="pointer-events-none absolute top-[258px] left-[5%] w-[326px] h-[326px] rounded-full bg-[rgba(255,63,0,0.15)] blur-[80px] z-0 select-none"></div>
        <div className="pointer-events-none absolute top-[618px] right-[5%] w-[292px] h-[292px] rounded-full bg-gradient-to-b from-[rgba(255,63,0,0.15)] to-transparent blur-[40px] z-0 select-none"></div>

        {/* Hero Section */}
        <WorkHero />

        {/* Brand Identity Carousel Showcase Section */}
        <MockupCarousel />

        {/* Project discussion CTA section */}
        <ProjectDiscussionSection />
      </main>
      <Footer />
    </>
  );
}
