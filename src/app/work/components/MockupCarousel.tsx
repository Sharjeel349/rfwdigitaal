"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    src: "/images/work/Rooha_Wahid_Logo_Design_3 1.png",
    alt: "Brand Mockups Orange and Black Grid",
  },
  {
    src: "/images/work/Rooha_Wahid_Logo_Design_4 1.png",
    alt: "Brand Mockups Yellow Spek Grid",
  },
  {
    src: "/images/work/Rooha_Wahid_Logo_Design_2 1.png",
    alt: "Brand Mockups Dark Theme Grid",
  },
];

export default function MockupCarousel() {
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
            className="flex items-center justify-center w-[45.6px] h-[45.6px] shrink-0 rounded-full border-[2.28px] border-[#FF3F00] text-black hover:bg-[#FF3F00] hover:text-white transition-colors duration-300 z-10 cursor-pointer"
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
            className="flex items-center justify-center w-[45.6px] h-[45.6px] shrink-0 rounded-full border-[2.28px] border-[#FF3F00] text-black hover:bg-[#FF3F00] hover:text-white transition-colors duration-300 z-10 cursor-pointer"
          >
            <svg className="w-[14.8px] h-[14.8px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

        {/* Mobile indicators */}
        <div className="w-full flex md:hidden justify-center items-center gap-2 mt-4">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "bg-[#FF3F00] w-4" : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
