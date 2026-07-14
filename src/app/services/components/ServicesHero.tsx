"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[rgba(242,107,1,0.06)] pt-20 lg:pt-24 pb-0 z-10 border-b border-[#FAF6F0]">

      {/* Desktop Absolute Image - Large, Flush to Bottom-Left (aligns with first picture mockup) */}
      <div className="absolute left-0 bottom-[-50px] w-[55%] h-[calc(100%-80px)] pointer-events-none select-none hidden lg:block">
        <Image
          src="/images/services/maverick website photos (3) 1.png"
          alt="Creative team planning and brainstorming"
          fill
          className="object-contain object-bottom object-left"
          priority={true}
        />
      </div>

      {/* Main Container Wrapper */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col lg:flex-row justify-end items-end min-h-[500px] lg:min-h-[580px] relative z-10">

        {/* Mobile-only Image - Renders inline before the text on mobile */}
        <div className="w-full block lg:hidden select-none mb-8 pt-8">
          <div className="relative w-full aspect-[1596/898]">
            <Image
              src="/images/services/maverick website photos (3) 1.png"
              alt="Creative team planning and brainstorming"
              fill
              className="object-contain object-bottom"
              priority={true}
            />
          </div>
        </div>

        {/* Text Copy Panel - Aligned to the right side on desktop */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-start text-left pb-16 lg:pb-24">
          <h1 className="mb-6 text-[42px] sm:text-[60px] lg:text-[72px] font-medium leading-[1.04] tracking-[-0.04em] text-black font-display">
            Our Services
          </h1>
          <p className="max-w-[607px] text-[20px] sm:text-[24px] lg:text-[28px] font-normal leading-[1.3] text-black opacity-80">
            Our creative agency fosters an innovative and positive work culture that empowers and innovates urban culture through creative storytelling at Maverick Creative Group.
          </p>
        </div>

      </div>
    </section>
  );
}
