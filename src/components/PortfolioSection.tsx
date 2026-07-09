"use client";

import { useRef } from "react";
import Image from "next/image";
import { CaseStudy } from "@/data/content";

interface PortfolioSectionProps {
  items: CaseStudy[];
}

export default function PortfolioSection({ items }: PortfolioSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollOffset = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollOffset : scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="pt-0 pb-16 bg-white overflow-hidden select-none">
      <div className="mx-auto w-full max-w-[1547px] px-6 sm:px-8 2xl:px-0">
        
        {/* Case Studies Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex-none w-[320px] sm:w-[560px] lg:w-[calc(50%-16px)] aspect-[1.52] rounded-2xl overflow-hidden group snap-start cursor-pointer"
            >
              {/* Case Study Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 280px, 460px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Bottom Orange/Red Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF3F00] opacity-100 transition-opacity duration-300 z-10" />

              {/* Text/Tags Overlay Content */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end items-start text-left z-20">
                
                {/* Title */}
                <h3 className="font-sans font-black text-white text-[24px] sm:text-[32px] tracking-tight capitalize leading-[32px] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Categories Tag Pill */}
                <div className="inline-block border border-white/50 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 hover:bg-white hover:text-[#FF3F00] transition-all duration-300">
                  <span className="text-[14px] font-plus-jakarta font-normal tracking-tight text-white leading-[22px]">
                    {item.categories.join(" / ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Slider Controls (Arrows) */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/20 bg-transparent text-charcoal hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 transform active:scale-95 focus:outline-none shadow-sm"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5M12 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/20 bg-transparent text-charcoal hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 transform active:scale-95 focus:outline-none shadow-sm"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
