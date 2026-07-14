"use client";

import Image from "next/image";

export default function CardsGrid() {
  return (
    <section className="relative py-20 z-10 bg-white border-b border-[#FAF6F0]">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">

          {/* Card 1: Culture-Driven Creative Thinking */}
          <div className="w-full max-w-[380px] bg-[#FEF6F0] rounded-[20px] p-6 flex flex-col items-center justify-center text-center min-h-[350px] border border-[#FF3F00]/5 shadow-sm hover:scale-[1.03] transform transition-all duration-300 select-none gap-2">
            <div className="relative w-[220px] h-[180px] flex items-center justify-center overflow-visible">
              <Image
                src="/images/services/maverick website photos (4) 1.png"
                alt="Culture Driven Creative Thinking Illustration"
                fill
                className="object-contain scale-[1.5] transform transition-transform"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-black font-display leading-[1.3] text-transform: capitalize">
              Culture-Driven Creative Thinking
            </h3>
          </div>

          {/* Card 2: Visionary Storytelling */}
          <div className="w-full max-w-[380px] bg-[#FEF6F0] rounded-[20px] p-6 flex flex-col items-center justify-center text-center min-h-[350px] border border-[#FF3F00]/5 shadow-sm hover:scale-[1.03] transform transition-all duration-300 select-none gap-2">
            <div className="relative w-[220px] h-[180px] flex items-center justify-center overflow-visible">
              <Image
                src="/images/services/maverick website photos (4) 2.png"
                alt="Visionary Storytelling Illustration"
                fill
                className="object-contain scale-[1.7] transform transition-transform"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-black font-display leading-[1.3] text-transform: capitalize">
              Visionary Storytelling
            </h3>
          </div>

          {/* Card 3: Revolutionize Marketing */}
          <div className="w-full max-w-[380px] bg-[#FEF6F0] rounded-[20px] p-6 flex flex-col items-center justify-center text-center min-h-[350px] border border-[#FF3F00]/5 shadow-sm hover:scale-[1.03] transform transition-all duration-300 select-none gap-2">
            <div className="relative w-[220px] h-[180px] flex items-center justify-center overflow-visible">
              <Image
                src="/images/services/maverick website photos (4) 3.png"
                alt="Revolutionize Marketing Illustration"
                fill
                className="object-contain"
                style={{ transform: "scale(1.7)" }}
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-black font-display leading-[1.3] text-transform: capitalize">
              Revolutionize Marketing
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
