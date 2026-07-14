"use client";

import Image from "next/image";

const clientLogos = [
  { src: "/images/contact/Maverick-Creative_Client-Logo_Choice-Life.png", alt: "Choice Life client logo" },
  { src: "/images/contact/Maverick-Creative_Client-Logo_The-Real.png", alt: "The Real client logo" },
  { src: "/images/contact/Maverick-Creative_Client-Logo_Edge-Control.png", alt: "Edge Control client logo" },
  { src: "/images/contact/Maverick-Creative_Client-Logo_News-One.png", alt: "News One client logo" },
  { src: "/images/contact/Maverick-Creative_Client-Logo_Vitalize-Hair.png", alt: "Vitalize Hair client logo" },
  { src: "/images/contact/Maverick-Creative_Client-Logo_The-Steve-Harvey-Show.png", alt: "The Steve Harvey Show client logo" },
  { src: "/images/contact/Maverick-Creative_Client-Logo_MedCheck-Express.png", alt: "MedCheck Express client logo" },
];

export default function ClientsMarquee() {
  return (
    <section className="relative py-16 z-10 bg-[#FEF6F0] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col items-start gap-10">
        
        {/* Our Clients Badge */}
        <span className="inline-flex items-center justify-center rounded-[29px] bg-[#FF3F00] px-[19.3px] py-[4.8px] text-[16.9px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20">
          Our Clients
        </span>

        {/* Loop Marquee Client Logos Row */}
        <div className="w-full overflow-hidden relative py-4 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] select-none">
          <div className="flex gap-16 items-center animate-marquee">
            {/* First set of logos */}
            {clientLogos.map((logo, idx) => (
              <div key={`set1-${idx}`} className="relative w-[130px] h-[80px] shrink-0 hover:scale-110 transition-transform duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless infinite scrolling loop */}
            {clientLogos.map((logo, idx) => (
              <div key={`set2-${idx}`} className="relative w-[130px] h-[80px] shrink-0 hover:scale-110 transition-transform duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
