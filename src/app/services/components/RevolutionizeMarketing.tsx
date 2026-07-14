"use client";

import Image from "next/image";

export default function RevolutionizeMarketing() {
  return (
    <section id="revolution-marketing" className="relative py-24 z-10 bg-white border-b border-[#FAF6F0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
        
        {/* Right Content Panel */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="mb-6 text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[0.98] tracking-[-0.04em] text-black font-display">
            Revolutionize <br />
            Marketing
          </h2>
          <p className="mb-10 max-w-[721px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
            We, at Maverick Creative Agency, are committed to revolutionizing marketing. As a leading creative agency, we use our expertise to create impactful campaigns that drive real business results and empower communities through dynamic storytelling. From traditional advertising to social media campaigns, we know how to get results. But our true passion lies in using marketing as a tool for positive change and driving cultural evolution. We take our responsibility seriously as culture shapers and invite you to join us on this exciting journey. Let us help you elevate your brand’s presence with our visionary approach to marketing.
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
          <div className="relative w-full max-w-[508px] aspect-[508/731]">
            <Image
              src="/images/services/MCG_The-Culutre_Digital-Revolution-img2-q69tvr2yiuh9ol2uwr2oxbgvi7khweniwy056wzen4 (1) 1.png"
              alt="Raised fist digital marketing revolution graphic portrait"
              width={508}
              height={731}
              className="object-contain w-full h-auto"
              priority={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
