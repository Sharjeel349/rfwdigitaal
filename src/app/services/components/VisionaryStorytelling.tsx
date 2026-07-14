"use client";

import Image from "next/image";

export default function VisionaryStorytelling() {
  return (
    <section id="visionary-storytelling" className="relative py-24 z-10 bg-zinc-50 border-b border-[#FAF6F0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col gap-20">
        
        {/* Row 1: Title & Right Capsule */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          {/* Left Copy block */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            <h2 className="mb-6 text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[0.98] tracking-[-0.04em] text-black font-display">
              Visionary <br />
              Storytelling
            </h2>
            <p className="max-w-[663px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
              At Maverick Creative Group, we’re all about visionary storytelling. As a creative agency, our team of experts has a deep understanding of the power of both online and offline marketing, and we use that knowledge to create powerful campaigns that connect with audiences and drive real business results. From impactful traditional advertising to engaging email marketing and innovative social media campaigns, we know how to get results. Join us on this exciting journey and let us help you make a meaningful impact with your marketing.
            </p>
          </div>

          {/* Right Capsule Image (Rectangle 4534 with border and border-radius 235px) */}
          <div className="w-full lg:w-[48%] flex justify-center items-center select-none">
            <div className="relative w-full max-w-[610px] aspect-[610/292] rounded-[235px] border-[3px] border-zinc-950 overflow-hidden shadow-lg bg-white">
              <Image
                src="/images/services/Rectangle 4534.png"
                alt="Two individuals talking in an office layout"
                fill
                sizes="(max-width: 768px) 100vw, 610px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Left Capsule & Bottom Paragraph + Button */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 w-full">
          {/* Right Copy block */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            <p className="mb-10 max-w-[693px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
              At Maverick Creative Group, we use marketing as a powerful tool for positive change. As a leading creative agency, we empower communities and drive cultural evolution through bold and dynamic storytelling. Our team of experts has a deep understanding of both online and offline marketing, allowing us to create impactful campaigns that connect with audiences and drive real business results. From traditional advertising to social media campaigns, we know how to get results. Join our movement and elevate your brand’s presence with visionary storytelling.
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

          {/* Left Capsule Image (Rectangle 4535 with border and border-radius 235px) */}
          <div className="w-full lg:w-[48%] flex justify-center items-center select-none">
            <div className="relative w-full max-w-[579px] aspect-[579/290] rounded-[235px] border-[3px] border-zinc-950 overflow-hidden shadow-lg bg-white">
              <Image
                src="/images/services/Rectangle 4535.png"
                alt="Creative artist in motion storytelling"
                fill
                sizes="(max-width: 768px) 100vw, 579px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
