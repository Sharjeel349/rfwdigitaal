"use client";

import Navbar from "@/components/Navbar";
import ProjectDiscussionSection from "@/components/ProjectDiscussionSection";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/content";
import ContactHero from "./components/ContactHero";
import CultureSection from "./components/CultureSection";
import ClientsMarquee from "./components/ClientsMarquee";

export default function ContactPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main className="flex-1 bg-white relative">
        {/* Glowing Background Accent */}
        <div className="pointer-events-none absolute top-[205px] right-[5%] w-[292px] h-[292px] rounded-full bg-gradient-to-b from-[rgba(255,63,0,0.18)] to-transparent blur-[40px] z-0 select-none"></div>

        {/* Contact Hero & Form Section */}
        <ContactHero />

        {/* Developing The Culture Column Section */}
        <CultureSection />

        {/* Our Clients Brand Row Section */}
        <ClientsMarquee />

        {/* CTA section (concentric circles) */}
        <ProjectDiscussionSection />
      </main>
      <Footer />
    </>
  );
}
