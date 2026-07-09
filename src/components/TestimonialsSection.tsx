"use client";

import { useState } from "react";

interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote: "This is my first time working with a creative agency and I had a fantastic experience. Business is doing better than ever and I am very grateful for Maverick. Highly recommend!",
    name: "Pavel Solomin",
    role: "Founder Net ABC",
  },
  {
    id: 2,
    quote: "Maverick’s culture-driven branding gave our startup the visual identity we needed to stand out. Empathy and creativity met perfectly to drive our conversions.",
    name: "Sarah Jenkins",
    role: "Director of Marketing, MedCheck",
  },
  {
    id: 3,
    quote: "Dynamic social media management and conversion-focused web architecture. They didn't just build a site; they set up a lead generation machine.",
    name: "Marcus Aurelius",
    role: "CEO, Edge Control",
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(1); // Start with center card active

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#FAF6F0] overflow-hidden select-none">
      <div className="mx-auto w-full max-w-[1740px] px-6 text-center sm:px-8">
        
        {/* Category Pill */}
        <div className="inline-flex rounded-[29px] bg-[#FF3F00] px-[19.3px] py-[4.8px] text-[16.9px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20 mb-10">
          OUR TESTIMONIALS
        </div>

        {/* Testimonials Deck */}
        <div className="flex items-center justify-center relative min-h-[460px] w-full max-w-[1547px] mx-auto px-4 mt-8">
          {testimonials.map((item, idx) => {
            const isActive = idx === activeIdx;
            const isLeft = idx === (activeIdx - 1 + testimonials.length) % testimonials.length;
            const isRight = idx === (activeIdx + 1) % testimonials.length;
            
            let positionClass = "";
            if (isActive) {
              positionClass = "scale-100 z-20 opacity-100 bg-gradient-to-r from-[rgba(255,63,0,0.15)] to-[rgba(255,63,0,0.3)] border-transparent shadow-xl w-full max-w-[90vw] md:w-[600px] lg:w-[720px] xl:w-[999px] xl:h-[432px] rounded-[29px] p-6 sm:p-12 xl:p-[77.3px] flex";
            } else if (isLeft) {
              positionClass = "scale-85 -translate-x-[105%] z-10 opacity-40 bg-white border-[1.2px] border-black/20 hover:opacity-60 cursor-pointer hidden md:flex w-full max-w-[90vw] md:w-[500px] lg:w-[600px] xl:w-[820px] xl:h-[353px] rounded-[23.8px] p-6 sm:p-12 xl:p-[63.5px]";
            } else if (isRight) {
              positionClass = "scale-85 translate-x-[105%] z-10 opacity-40 bg-white border-[1.2px] border-black/20 hover:opacity-60 cursor-pointer hidden md:flex w-full max-w-[90vw] md:w-[500px] lg:w-[600px] xl:w-[820px] xl:h-[353px] rounded-[23.8px] p-6 sm:p-12 xl:p-[63.5px]";
            } else {
              positionClass = "scale-75 opacity-0 pointer-events-none z-0 hidden";
            }

            return (
              <article
                key={item.id}
                onClick={() => {
                  if (isLeft || isRight) setActiveIdx(idx);
                }}
                className={`transition-all duration-500 ease-in-out flex flex-col justify-between text-left min-h-[300px] shrink-0 absolute ${positionClass}`}
              >
                {/* Quote Text */}
                <blockquote className={`font-sans font-medium leading-[1.1] tracking-[-0.04em] text-black mb-8 transition-all ${
                  isActive ? "text-[20px] sm:text-[28px] lg:text-[38.7px]" : "text-[16px] sm:text-[22px] lg:text-[31.7px]"
                }`}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Footer with Author Info and Navigation buttons */}
                <footer className="mt-auto flex items-end justify-between w-full gap-4">
                  <div className="flex flex-col items-start text-left gap-1">
                    <span className={`font-sans font-medium tracking-[-0.04em] text-black ${
                      isActive ? "text-[18px] lg:text-[29px]" : "text-[16px] lg:text-[23.8px]"
                    }`}>
                      {item.name}
                    </span>
                    <span className={`font-sans font-normal leading-[1.5] text-black opacity-80 ${
                      isActive ? "text-[14px] lg:text-[19.3px]" : "text-[12px] lg:text-[15.9px]"
                    }`}>
                      {item.role}
                    </span>
                  </div>

                  {/* Slider Control Buttons inside the active/inactive card */}
                  <div className="flex items-center gap-3 select-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className={`flex items-center justify-center rounded-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 transform active:scale-95 focus:outline-none shrink-0 ${
                        isActive ? "w-[48.3px] h-[48.3px]" : "w-[39.7px] h-[39.7px]"
                      }`}
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className={`flex items-center justify-center rounded-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 transform active:scale-95 focus:outline-none shrink-0 ${
                        isActive ? "w-[48.3px] h-[48.3px]" : "w-[39.7px] h-[39.7px]"
                      }`}
                      aria-label="Next testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
