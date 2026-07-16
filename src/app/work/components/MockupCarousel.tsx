"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  noFrame?: boolean;
}

function CarouselSection({ label, anchorId, items, noFrame = false }: CarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(Math.min(1, items.length - 1));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  const leftIndex = (activeIndex - 1 + items.length) % items.length;
  const middleIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % items.length;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleLightboxPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleLightboxNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % items.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handleLightboxPrev();
      if (e.key === "ArrowRight") handleLightboxNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  // Lock scroll background
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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
              onClick={() => openLightbox(leftIndex)}
              className={`hover-lift animate-card-slide hidden md:block md:w-[31%] max-w-[433px] overflow-hidden shadow-md cursor-zoom-in ${noFrame ? "rounded-[24px]" : "bg-white rounded-[32px] p-3 pb-8 border border-zinc-200/50"
                }`}
            >
              <div className={`relative w-full aspect-[433/303] overflow-hidden ${noFrame ? "rounded-[24px]" : "rounded-[24px]"}`}>
                <Image
                  src={items[leftIndex].src}
                  alt={items[leftIndex].alt}
                  fill
                  quality={75}
                  sizes="(max-width: 1280px) 33vw, 433px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle / featured card */}
            <div
              key={`middle-${middleIndex}`}
              onClick={() => openLightbox(middleIndex)}
              className={`hover-lift animate-card-slide w-full md:w-[38%] max-w-[559px] overflow-hidden shadow-xl scale-100 md:scale-105 z-10 transition-all duration-300 cursor-zoom-in ${noFrame
                  ? "rounded-[28px] border-2 border-brand-orange"
                  : "bg-white rounded-[36px] p-4 pb-10 border-2 border-brand-orange"
                }`}
            >
              <div className={`relative w-full aspect-[559/391] overflow-hidden ${noFrame ? "rounded-[28px]" : "rounded-[28px]"}`}>
                <Image
                  src={items[middleIndex].src}
                  alt={items[middleIndex].alt}
                  fill
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 559px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right card – hidden on mobile */}
            <div
              key={`right-${rightIndex}`}
              onClick={() => openLightbox(rightIndex)}
              className={`hover-lift animate-card-slide hidden md:block md:w-[31%] max-w-[435px] overflow-hidden shadow-md cursor-zoom-in ${noFrame ? "rounded-[24px]" : "bg-white rounded-[32px] p-3 pb-8 border border-zinc-200/50"
                }`}
            >
              <div className={`relative w-full aspect-[435/305] overflow-hidden ${noFrame ? "rounded-[24px]" : "rounded-[24px]"}`}>
                <Image
                  src={items[rightIndex].src}
                  alt={items[rightIndex].alt}
                  fill
                  quality={75}
                  sizes="(max-width: 1280px) 33vw, 435px"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === index ? "bg-[#FF3F00] w-4" : "bg-zinc-300 hover:bg-zinc-400"
                }`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal via React Portal */}
      {lightboxOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md cursor-zoom-out"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 cursor-pointer z-[10000]"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Slider Content Wrapper */}
          <div
            className="relative w-full max-w-[90vw] md:max-w-[80vw] h-[70vh] flex items-center justify-center"
          >
            {/* Left Lightbox Arrow */}
            <button
              onClick={handleLightboxPrev}
              className="absolute left-2 md:-left-20 text-white bg-[#FF3F00]/90 hover:bg-[#FF3F00] p-4 rounded-full transition-all duration-300 cursor-pointer z-[10000] shadow-lg shadow-brand-orange/30"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Full Resolution Image */}
            <div className="relative w-full h-full flex items-center justify-center select-none">
              <img
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-card-slide cursor-default"
              />
            </div>

            {/* Right Lightbox Arrow */}
            <button
              onClick={handleLightboxNext}
              className="absolute right-2 md:-right-20 text-white bg-[#FF3F00]/90 hover:bg-[#FF3F00] p-4 rounded-full transition-all duration-300 cursor-pointer z-[10000] shadow-lg shadow-brand-orange/30"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Info Details */}
          <div
            className="mt-6 text-center text-white/95 px-6 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xl font-medium tracking-wide">{items[lightboxIndex].alt}</p>
            <p className="text-sm text-zinc-400 mt-2 font-mono">
              {lightboxIndex + 1} / {items.length}
            </p>
          </div>
        </div>,
        document.body
      )}
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
        noFrame
      />
      <CarouselSection
        label="Book Covers"
        anchorId="book-covers"
        items={bookCoverItems}
        noFrame
      />
      <CarouselSection
        label="Ebooks"
        anchorId="ebooks"
        items={ebookItems}
        noFrame
      />
      <CarouselSection
        label="Flyers"
        anchorId="flyers"
        items={flyerItems}
        noFrame
      />
      <CarouselSection
        label="Presentations"
        anchorId="presentations"
        items={pptItems}
        noFrame
      />
      <CarouselSection
        label="Social Media Posts"
        anchorId="social-media"
        items={socialMediaItems}
        noFrame
      />
    </>
  );
}
