import Image from "next/image";
import { HeroContent } from "@/data/content";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[840px] items-center overflow-hidden bg-[#FAF6F0] pb-10 pt-28 lg:pb-0"
    >
      {/* Decorative Union peach shapes (Top Right Corner) */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[590px] w-[600px] opacity-100 lg:block select-none">
        <Image
          src="/images/herounion.png"
          alt=""
          fill
          sizes="600px"
          className="object-contain object-top-right"
          priority={true}
        />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:px-[72px] xl:max-w-none xl:px-[86px]">
        <div className="relative z-30 flex flex-col items-start text-left lg:col-span-6">
          <span className="mb-7 inline-block rounded-[28.8px] bg-[#FF3F00] px-[19.2px] py-[4.8px] text-[16.8px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20">
            {content.badge}
          </span>

          <h1 className="mb-7 max-w-[800px] text-[36px] font-medium leading-[1.04] tracking-[-0.04em] text-black sm:text-[56px] lg:text-[72px]">
            Unlock{" "}
            <span className="italic text-brand-orange">
              {content.italicizedWord}
            </span>{" "}
            with our <span className="whitespace-nowrap">all-in-one</span>{" "}
            platform for Urban Creativity and Digital Innovation.
          </h1>

          <p className="mb-8 max-w-[550px] text-[19.2px] font-normal leading-[1.5] text-black opacity-80">
            {content.description}
          </p>

          <div className="relative hidden h-40 w-full sm:block">
            <div className="absolute bottom-4 left-[-52px] right-[-140px] top-0 z-0 flex -translate-y-3 items-center">
              <svg
                className="h-full w-full"
                viewBox="0 0 1040 150"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 5 106 H 420 C 455 106 470 42 510 42 H 1035"
                  stroke="#111111"
                  strokeOpacity="0.14"
                  strokeWidth="1.4"
                />
                <rect
                  x="1"
                  y="102"
                  width="7"
                  height="7"
                  fill="#111111"
                  fillOpacity="0.16"
                  transform="rotate(45 5 106)"
                />
              </svg>
            </div>

            <div className="absolute left-0 top-[106px] z-10 flex -translate-y-1/2 items-center gap-[38.5px]">
              <a
                href={content.primaryCta.href}
                className="group flex items-center justify-center gap-[28.8px] rounded-[57.7px] bg-black pl-[28.8px] pr-[9.6px] py-[9.6px] h-[67.3px] text-[16.8px] font-bold uppercase tracking-[0.13em] text-white shadow-[0_14px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-brand-orange"
              >
                {content.primaryCta.label}
                <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border-[2.4px] border-[#FF3F00] text-white transition-colors group-hover:border-white group-hover:bg-white group-hover:text-brand-orange">
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
              <a
                href={content.secondaryCta.href}
                className="py-3 text-[16.8px] font-bold uppercase tracking-[0.13em] text-black transition-colors hover:text-brand-orange"
              >
                {content.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="mt-4 flex w-full flex-col gap-5 sm:hidden">
            <div className="flex w-fit items-center gap-4 rounded-full border border-[#E5DCD3]/50 bg-white px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-white bg-[#A3A3A3]" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-[#C2C2C2]" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-[#E5E5E5]" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-[#D4D4D4]" />
              </div>
              <span className="text-xs font-black leading-none text-black">
                {content.stats.clientsCount}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={content.primaryCta.href}
                className="flex items-center justify-center rounded-full bg-black px-8 py-4 text-[16.8px] font-bold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:bg-brand-orange"
              >
                {content.primaryCta.label}
              </a>
              <a
                href={content.secondaryCta.href}
                className="flex items-center justify-center py-3 text-[16.8px] font-bold uppercase tracking-[0.13em] text-black transition-colors hover:text-brand-orange"
              >
                {content.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] select-none lg:col-span-6 lg:min-h-[640px]">
          <div className="absolute bottom-[-54px] left-1/2 h-[430px] w-[430px] -translate-x-1/2 sm:h-[520px] sm:w-[520px] lg:bottom-[-86px] lg:left-auto lg:right-[-34px] lg:h-[585px] lg:w-[585px] lg:translate-x-0 xl:right-[48px] xl:h-[620px] xl:w-[620px]">
            <div className="absolute bottom-0 right-0 h-[88%] w-[88%] rounded-full bg-[#FF3F00] shadow-[0_24px_80px_rgba(255,63,0,0.22)]" />

            <div className="absolute bottom-[5%] right-[-4%] z-10 h-[78%] w-[112%] sm:h-[80%] sm:w-[114%] lg:right-[-8%] lg:h-[82%] lg:w-[118%]">
              <Image
                src="/images/figma-hero-wide.png"
                alt="Person wearing a VR headset reaching toward a digital interface"
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 48vw, 680px"
                className="object-contain object-bottom"
                preload={true}
              />
            </div>

            <div className="hover-lift absolute left-[54%] top-[2%] z-20 hidden items-center gap-[10px] rounded-full bg-white px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:flex lg:left-[42%] lg:top-[-8%]">
              <span className="relative flex h-8 w-8 items-center justify-center text-brand-orange shrink-0">
                <span className="absolute left-0 top-0 flex gap-0.5 text-[#ffb21f]">
                  {[0, 1].map((star) => (
                    <svg
                      key={star}
                      className="h-2 w-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <svg
                  className="mt-2 h-5 w-5 text-[#62ce86]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 10h3v10H2V10zm19.38 1c.22-.64.38-1.32.38-2.05 0-2.53-2.05-4.58-4.58-4.58-.94 0-1.8.29-2.5.78C14.07 3.86 12.63 3 11 3H9v2h2c1.1 0 2 .9 2 2v1H8.5c-.83 0-1.5.67-1.5 1.5v6.5h1.79l.91 3.65c.16.63.72 1.07 1.38 1.07h5.05c.71 0 1.31-.47 1.49-1.15l1.76-7.05v-.72z" />
                </svg>
              </span>
              <span className="whitespace-nowrap text-[20.4px] font-medium leading-[26px] text-brand-orange font-sans">
                {content.stats.satisfaction}
              </span>
            </div>

            <div className="hover-lift absolute left-[6%] top-[28%] z-20 flex items-center gap-[10px] rounded-full bg-white px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:left-[2%] lg:left-[6%] lg:top-[10%]">
              <span className="flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-[#FF3F00] text-white">
                <svg
                  className="h-5.5 w-5.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span className="flex flex-col text-left">
                <span className="text-[16.8px] font-bold leading-[1.5] tracking-[0.13em] uppercase text-[#191D27] font-sans">
                  5 Stars
                </span>
                <span className="text-[12px] font-semibold leading-normal text-[#858585] font-sans">
                  Read Our{" "}
                  <span className="cursor-pointer font-bold text-[#858585] underline decoration-[#858585]/50 underline-offset-2 hover:text-brand-orange">
                    Success Stories
                  </span>
                </span>
              </span>
            </div>

            <div className="hover-lift absolute left-[-10%] top-[56%] z-20 hidden items-center gap-4 rounded-full bg-white px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:flex lg:left-[-36%] lg:top-[47%] xl:left-[-38%] xl:top-[28%]">
              <div className="flex -space-x-3">
                <span className="h-[50px] w-[50px] rounded-full border-3 border-white bg-[#C4C4C4]" />
                <span className="h-[50px] w-[50px] rounded-full border-3 border-white bg-[#C4C4C4]" />
                <span className="h-[50px] w-[50px] rounded-full border-3 border-white bg-[#C4C4C4]" />
                <span className="h-[50px] w-[50px] rounded-full border-3 border-white bg-[#C4C4C4]" />
              </div>
              <span className="whitespace-nowrap text-[16px] font-bold leading-[30px] tracking-[-0.02em] text-[#17012C] font-sans capitalize">
                {content.stats.clientsCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
