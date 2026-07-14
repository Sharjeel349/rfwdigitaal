"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectDiscussionSection from "@/components/ProjectDiscussionSection";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/content";

const portfolioItems = [
  {
    src: "/images/Rooha_Wahid_Logo_Design_3%201.png",
    alt: "Brand Mockups Orange and Black Grid",
  },
  {
    src: "/images/Rooha_Wahid_Logo_Design_4%201.png",
    alt: "Brand Mockups Yellow Spek Grid",
  },
  {
    src: "/images/Rooha_Wahid_Logo_Design_2%201.png",
    alt: "Brand Mockups Dark Theme Grid",
  },
];

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const leftIndex = (activeIndex - 1 + portfolioItems.length) % portfolioItems.length;
  const middleIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % portfolioItems.length;

  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main className="flex-1 bg-white relative">
        {/* Glowing Background Accents */}
        <div className="pointer-events-none absolute top-[258px] left-[5%] w-[326px] h-[326px] rounded-full bg-[rgba(255,63,0,0.15)] blur-[80px] z-0 select-none"></div>
        <div className="pointer-events-none absolute top-[618px] right-[5%] w-[292px] h-[292px] rounded-full bg-gradient-to-b from-[rgba(255,63,0,0.15)] to-transparent blur-[40px] z-0 select-none"></div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[rgba(242,107,1,0.06)] pt-4 pb-0 md:pt-8 md:pb-0 lg:pt-[24px] lg:pb-0 z-10 border-b border-[#FAF6F0]">
          {/* Decorative Union shape (top-right blur glow matching CSS) */}
          <div className="pointer-events-none absolute -right-[100px] -top-[100px] w-[660px] h-[670px] bg-gradient-to-b from-[rgba(255,63,0,0.18)] to-transparent opacity-80 rounded-full blur-[80px] z-0 select-none"></div>

          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left Copy Panel */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <span className="mb-6 inline-flex items-center justify-center rounded-[27.4px] bg-[#FF3F00] px-[18.2px] py-[6px] text-[15.9px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20">
                Portfolio
              </span>

              <h1 className="mb-6 text-[42px] sm:text-[60px] lg:text-[72.9px] font-medium leading-[0.9] tracking-[-0.04em] text-black">
                Delivering Results <br className="hidden sm:inline" />
                Through Experience
              </h1>

              <p className="mb-10 max-w-[620px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
                Our portfolio represents a diverse collection of successful projects completed across multiple industries. By combining creativity, strategy, and technical expertise, we have helped brands strengthen their online presence, engage their audiences, and achieve their business objectives. Every project is built on collaboration, attention to detail, and a passion for excellence.
              </p>

              {/* Interactive CTA buttons */}
              <div className="flex items-center gap-[28.8px]">
                <a
                  href="#brand-identity"
                  className="group flex items-center justify-center gap-[9.12px] h-[45.6px] text-[15.9px] font-bold uppercase tracking-[0.13em] text-black hover:text-[#FF3F00] transition-colors duration-300"
                >
                  Learn More
                  <span className="flex h-[45.6px] w-[45.6px] shrink-0 items-center justify-center rounded-full border-[2.28px] border-[#FF3F00] bg-transparent text-black transition-colors group-hover:bg-[#FF3F00] group-hover:text-white">
                    <svg
                      className="h-[14.8px] w-[14.8px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Image Illustration Panel */}
            <div className="w-full lg:w-1/2 flex justify-center items-end select-none lg:self-end">
              <div className="relative w-full max-w-[565px] aspect-[565/799] lg:w-[565px] lg:h-[799px]">
                <Image
                  src="/images/Syringe%20Instrutions%201.png"
                  alt="Syringe Instructions Illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 565px"
                  className="object-contain object-bottom drop-shadow-2xl animate-fade-in"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Identity Showcase Section */}
        <section id="brand-identity" className="relative py-24 z-10 bg-white">
          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col items-start gap-12">

            {/* Header Badge */}
            <div className="w-full flex justify-between items-center">
              <span className="inline-flex items-center justify-center rounded-[27.4px] bg-[#FF3F00] px-[18.2px] py-[6px] text-[15.9px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20">
                Brand Identity
              </span>
            </div>

            {/* Showcase Grid with Slider Arrows */}
            <div className="w-full flex items-center justify-between gap-2 md:gap-8">

              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous portfolio item"
                className="flex items-center justify-center w-[45.6px] h-[45.6px] shrink-0 rounded-full border-[2.28px] border-[#FF3F00] text-black hover:bg-[#FF3F00] hover:text-white transition-colors duration-300 z-10"
              >
                <svg className="w-[14.8px] h-[14.8px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>

              {/* Mockup Showcase Cards */}
              <div className="w-full flex items-center justify-center gap-6 lg:gap-8 perspective-container">

                {/* Logo Design 3 (Left Mockup - hidden on mobile) */}
                <div key={`left-${leftIndex}`} className="hover-lift animate-card-swap hidden md:block md:w-[31%] max-w-[433px] bg-[#F7F5F0] rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md">
                  <div className="relative w-full aspect-[433/303]">
                    <Image
                      src={portfolioItems[leftIndex].src}
                      alt={portfolioItems[leftIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 433px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Logo Design 4 (Middle / Taller Mockup) */}
                <div key={`middle-${middleIndex}`} className="hover-lift animate-card-swap w-full md:w-[38%] max-w-[559px] bg-[#FAF8F5] rounded-2xl overflow-hidden border-2 border-brand-orange shadow-lg scale-100 md:scale-105 z-10 transition-transform duration-300">
                  <div className="relative w-full aspect-[559/391]">
                    <Image
                      src={portfolioItems[middleIndex].src}
                      alt={portfolioItems[middleIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 559px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Logo Design 2 (Right Mockup - hidden on mobile) */}
                <div key={`right-${rightIndex}`} className="hover-lift animate-card-swap hidden md:block md:w-[31%] max-w-[435px] bg-[#F7F5F0] rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md">
                  <div className="relative w-full aspect-[435/305]">
                    <Image
                      src={portfolioItems[rightIndex].src}
                      alt={portfolioItems[rightIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 435px"
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                aria-label="Next portfolio item"
                className="flex items-center justify-center w-[45.6px] h-[45.6px] shrink-0 rounded-full border-[2.28px] border-[#FF3F00] text-black hover:bg-[#FF3F00] hover:text-white transition-colors duration-300 z-10"
              >
                <svg className="w-[14.8px] h-[14.8px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </div>

            {/* Mobile indicators */}
            <div className="w-full flex md:hidden justify-center items-center gap-2 mt-4">
              <button
                aria-label="View first brand design"
                className={`h-2 rounded-full transition-all duration-300 ${middleIndex === 0 ? "bg-[#FF3F00] w-6" : "bg-zinc-300 w-2"}`}
                onClick={() => setActiveIndex(0)}
              ></button>
              <button
                aria-label="View second brand design"
                className={`h-2 rounded-full transition-all duration-300 ${middleIndex === 1 ? "bg-[#FF3F00] w-6" : "bg-zinc-300 w-2"}`}
                onClick={() => setActiveIndex(1)}
              ></button>
              <button
                aria-label="View third brand design"
                className={`h-2 rounded-full transition-all duration-300 ${middleIndex === 2 ? "bg-[#FF3F00] w-6" : "bg-zinc-300 w-2"}`}
                onClick={() => setActiveIndex(2)}
              ></button>
            </div>

          </div>
        </section>

        {/* CTA section (concentric circles) */}
        <ProjectDiscussionSection />
      </main>
      <Footer />
    </>
  );
}
