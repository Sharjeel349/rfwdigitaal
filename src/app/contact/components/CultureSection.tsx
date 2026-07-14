"use client";

import Image from "next/image";

export default function CultureSection() {
  return (
    <section className="relative py-24 z-10 bg-white border-b border-[#FAF6F0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Copy Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="mb-6 text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[0.98] tracking-[-0.04em] text-black">
            Developing <br className="hidden sm:inline" />
            The Culture
          </h2>

          <p className="mb-10 max-w-[620px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
            Maverick Creative Group is an urban marketing agency that empowers and innovates the culture. Our experts use cutting-edge solutions to help clients elevate their brand and achieve success. With tailored services from research to creative design, we can help you unlock your potential in the urban market.
          </p>

          {/* Get Started Button */}
          <a
            href="#contact-form"
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

        {/* Right Flipped Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center items-center select-none">
          <div className="relative w-full max-w-[680px] aspect-[888/839] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/40">
            <Image
              src="/images/contact/MCG_Contact-Support-img2 1.png"
              alt="Young creative painting wall graphic illustration"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover scale-x-[-1]"
              priority={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
