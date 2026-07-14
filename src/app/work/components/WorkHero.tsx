"use client";

import Link from "next/link";
import Image from "next/image";

export default function WorkHero() {
  return (
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
              src="/images/work/Syringe%20Instrutions%201.png"
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
  );
}
