"use client";

import Image from "next/image";

export default function CultureThinking() {
  return (
    <section id="culture-thinking" className="relative py-24 z-10 bg-white border-b border-[#FAF6F0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
        
        {/* Right Content Panel */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="mb-6 text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[0.98] tracking-[-0.04em] text-black font-display">
            Culture-Driven <br />
            Creative Thinking
          </h2>
          <p className="mb-10 max-w-[721px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
            Maverick Creative Group is a leading creative agency that prides itself on its culture-driven thinking. We are fueled by a work culture that values innovation, collaboration, and inspiration, and we strive to push the boundaries of what’s possible with every project we take on. Our seasoned experts bring diverse skills and perspectives to the table, delivering exceptional results through our culture-driven approach. Our focus on creativity and innovation enables us to drive growth and success for our clients, and we’re always looking for talented individuals to join our team and experience the power of a visionary creative agency firsthand.
          </p>

          {/* Get Started Button */}
          <a
            href="/contact"
            className="group flex h-[67.3px] items-center justify-center gap-[28.8px] rounded-[57.7px] bg-[#FF3F00] pl-[28.8px] pr-[9.6px] py-[9.6px] text-[16.8px] font-bold uppercase tracking-[0.13em] text-white shadow-md shadow-brand-orange/25 transition-all duration-300 hover:bg-black hover:shadow-black/25"
          >
            GET STARTED
            <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[#FF3F00] transition-colors group-hover:text-black">
              <svg
                className="h-[15.6px] w-[15.6px]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
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

        {/* Left Image Panel - Raw Placement */}
        <div className="w-full lg:w-1/2 flex justify-start items-center select-none">
          <div className="relative w-full max-w-[511px] aspect-[511/654]">
            <Image
              src="/images/services/MCG_The-Culture_Culture-Driven-Creative-Thinking-img2 (1) 1.png"
              alt="Creative designer working on a laptop at a desk"
              width={511}
              height={654}
              className="object-contain w-full h-auto"
              priority={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
