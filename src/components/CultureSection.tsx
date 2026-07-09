import Image from "next/image";
import { CultureContent } from "@/data/content";

interface CultureSectionProps {
  content: CultureContent;
}

export default function CultureSection({ content }: CultureSectionProps) {
  return (
    <section id="culture" className="relative py-16 lg:py-0 lg:h-[550px] bg-[#FFF8F6] overflow-hidden select-none flex items-center">

      {/* Decorative Union peach shapes (Bottom Right Corner) */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] sm:w-[438px] sm:h-[431px] pointer-events-none z-0 opacity-100">
        <Image
          src="/images/Union.png"
          alt=""
          fill
          sizes="(max-width: 640px) 300px, 438px"
          className="object-contain object-bottom-right"
        />
      </div>

      <div className="w-full max-w-[1547px] mx-auto px-6 sm:px-8 2xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 h-full">
        
        {/* Left Column - Image and geometric background */}
        <div className="lg:col-span-6 flex justify-center items-center lg:items-end relative select-none h-[450px] sm:h-[550px] lg:h-full">
          {/* Geometric wireframe pattern background (Desktop) */}
          <div className="absolute left-[40px] top-[60px] w-[335px] h-[333px] opacity-80 z-0 pointer-events-none hidden lg:block">
            <Image
              src="/images/image 278.png"
              alt=""
              fill
              sizes="335px"
              className="object-contain"
            />
          </div>
          {/* Mobile geometric background */}
          <div className="absolute left-[10%] top-[10%] w-[200px] h-[200px] opacity-80 z-0 pointer-events-none lg:hidden">
            <Image
              src="/images/image 278.png"
              alt=""
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>

          {/* Woman Cutout Image (Desktop) */}
          <div className="absolute left-[240px] bottom-0 w-[419px] h-[511px] z-10 hidden lg:block">
            <Image
              src="/images/personimg4.png"
              alt="Culture Driven Marketing"
              fill
              sizes="419px"
              className="object-contain object-bottom"
              priority
            />
          </div>
          {/* Woman Cutout Image (Mobile) */}
          <div className="relative w-[300px] h-[366px] z-10 lg:hidden">
            <Image
              src="/images/personimg4.png"
              alt="Culture Driven Marketing"
              fill
              sizes="300px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Column - Text Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left lg:pl-12 relative z-10">
          <h2 className="font-sans font-semibold text-black text-[clamp(32px,4vw,56px)] leading-[1.08] tracking-tight mb-8">
            {content.title}
          </h2>

          <div className="space-y-6 max-w-[620px]">
            {content.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base leading-relaxed text-[#5C5C5E]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
