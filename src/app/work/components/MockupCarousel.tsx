"use client";

import { useState } from "react";
import Image from "next/image";

type PortfolioItem = { src: string; alt: string };

// ─── Data ──────────────────────────────────────────────────────────────────────

const brandIdentityItems: PortfolioItem[] = [
  { src: "/images/work/Rooha_Wahid_Logo_Design_3 1.png", alt: "Brand Mockups Orange and Black Grid" },
  { src: "/images/work/Rooha_Wahid_Logo_Design_4 1.png", alt: "Brand Mockups Yellow Spek Grid" },
  { src: "/images/work/Rooha_Wahid_Logo_Design_2 1.png", alt: "Brand Mockups Dark Theme Grid" },
];

const amazonKdpItems: PortfolioItem[] = [
  { src: "/images/work/amazon-kdp/AiCaseForChrist.jpg", alt: "AI Case for Christ KDP Cover" },
  { src: "/images/work/amazon-kdp/AiGuide.jpg", alt: "AI Guide KDP Cover" },
  { src: "/images/work/amazon-kdp/GoodNews-Volume01.jpg", alt: "Good News Volume 01 KDP Cover" },
  { src: "/images/work/amazon-kdp/GoodNews-Volume02.jpg", alt: "Good News Volume 02 KDP Cover" },
  { src: "/images/work/amazon-kdp/Thoughts.jpg", alt: "Thoughts KDP Cover" },
];

const bookCoverItems: PortfolioItem[] = [
  { src: "/images/work/book-covers/Ai-Confirms.jpg", alt: "AI Confirms Book Cover" },
  { src: "/images/work/book-covers/GoodNews.png", alt: "Good News Book Cover" },
  { src: "/images/work/book-covers/Heavenly.png", alt: "Heavenly Book Cover" },
  { src: "/images/work/book-covers/InsaneJourney.jpg", alt: "Insane Journey Book Cover" },
  { src: "/images/work/book-covers/PeterThiel.png", alt: "Peter Thiel Book Cover" },
];

const ebookItems: PortfolioItem[] = [
  { src: "/images/work/ebooks/Backpack Essentials Checklist.jpg", alt: "Backpack Essentials Checklist Ebook" },
  { src: "/images/work/ebooks/HOME SELLER CONSULTATION.jpg", alt: "Home Seller Consultation Ebook" },
  { src: "/images/work/ebooks/InfiniteSales.jpg", alt: "Infinite Sales Ebook" },
  { src: "/images/work/ebooks/Sleep Mistakes Lead Magnet.jpg", alt: "Sleep Mistakes Lead Magnet Ebook" },
  { src: "/images/work/ebooks/Workbook Rethinking the Employee.jpg", alt: "Rethinking the Employee Workbook" },
];

const flyerItems: PortfolioItem[] = [
  { src: "/images/work/flyers/Rooha_Wahid_Flyer_Design_1.jpg", alt: "Flyer Design 1" },
  { src: "/images/work/flyers/Rooha_Wahid_Flyer_Design_2.jpg", alt: "Flyer Design 2" },
  { src: "/images/work/flyers/Rooha_Wahid_Flyer_Design_3.jpg", alt: "Flyer Design 3" },
  { src: "/images/work/flyers/Rooha_Wahid_Flyer_Design_4.jpg", alt: "Flyer Design 4" },
  { src: "/images/work/flyers/Rooha_Wahid_Flyer_Design_5.jpg", alt: "Flyer Design 5" },
];

const pptItems: PortfolioItem[] = [
  { src: "/images/work/ppts/Clozure.jpg", alt: "Clozure Presentation" },
  { src: "/images/work/ppts/Devon.jpg", alt: "Devon Presentation" },
  { src: "/images/work/ppts/HubbleCore copy.jpg", alt: "HubbleCore Presentation" },
  { src: "/images/work/ppts/Maverick.jpg", alt: "Maverick Presentation" },
  { src: "/images/work/ppts/PrepMeal.jpg", alt: "PrepMeal Presentation" },
];

const socialMediaItems: PortfolioItem[] = [
  { src: "/images/work/social-media/14.jpg", alt: "Social Media Post 1" },
  { src: "/images/work/social-media/15.jpg", alt: "Social Media Post 2" },
  { src: "/images/work/social-media/16.jpg", alt: "Social Media Post 3" },
  { src: "/images/work/social-media/17.jpg", alt: "Social Media Post 4" },
  { src: "/images/work/social-media/18.jpg", alt: "Social Media Post 5" },
];

// ─── Carousel Component ────────────────────────────────────────────────────────

interface CarouselSectionProps {
  label: string;
  anchorId: string;
  items: PortfolioItem[];
}

function CarouselSection({ label, anchorId, items }: CarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(Math.min(1, items.length - 1));

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  const leftIndex = (activeIndex - 1 + items.length) % items.length;
  const middleIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % items.length;

  return (
    <section id={anchorId} className="relative py-24 z-10 bg-white border-t border-zinc-100">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col items-start gap-12">

        {/* Header Badge */}
        <div className="w-full flex justify-between items-center">
          <span className="inline-flex items-center justify-center rounded-[27.4px] bg-[#FF3F00] px-[18.2px] py-[6px] text-[15.9px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20">
            {label}
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
          <div className="w-full flex items-center justify-center gap-6 lg:gap-8">

            {/* Left card – hidden on mobile */}
            <div
              key={`left-${leftIndex}`}
              className="hover-lift animate-card-swap hidden md:block md:w-[31%] max-w-[433px] bg-[#F7F5F0] rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md"
            >
              <div className="relative w-full aspect-[433/303]">
                <Image
                  src={items[leftIndex].src}
                  alt={items[leftIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 433px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle / featured card */}
            <div
              key={`middle-${middleIndex}`}
              className="hover-lift animate-card-swap w-full md:w-[38%] max-w-[559px] bg-[#FAF8F5] rounded-2xl overflow-hidden border-2 border-brand-orange shadow-lg scale-100 md:scale-105 z-10 transition-transform duration-300"
            >
              <div className="relative w-full aspect-[559/391]">
                <Image
                  src={items[middleIndex].src}
                  alt={items[middleIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 559px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right card – hidden on mobile */}
            <div
              key={`right-${rightIndex}`}
              className="hover-lift animate-card-swap hidden md:block md:w-[31%] max-w-[435px] bg-[#F7F5F0] rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md"
            >
              <div className="relative w-full aspect-[435/305]">
                <Image
                  src={items[rightIndex].src}
                  alt={items[rightIndex].alt}
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

        {/* Mobile dot indicators */}
        <div className="w-full flex md:hidden justify-center items-center gap-2 mt-4">
          {items.map((_, index) => (
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

// ─── Page Export ───────────────────────────────────────────────────────────────

export default function MockupCarousel() {
  return (
    <>
      <CarouselSection
        label="Brand Identity"
        anchorId="brand-identity"
        items={brandIdentityItems}
      />
      <CarouselSection
        label="Amazon KDP"
        anchorId="amazon-kdp"
        items={amazonKdpItems}
      />
      <CarouselSection
        label="Book Covers"
        anchorId="book-covers"
        items={bookCoverItems}
      />
      <CarouselSection
        label="Ebooks"
        anchorId="ebooks"
        items={ebookItems}
      />
      <CarouselSection
        label="Flyers"
        anchorId="flyers"
        items={flyerItems}
      />
      <CarouselSection
        label="Presentations"
        anchorId="presentations"
        items={pptItems}
      />
      <CarouselSection
        label="Social Media Posts"
        anchorId="social-media"
        items={socialMediaItems}
      />
    </>
  );
}
