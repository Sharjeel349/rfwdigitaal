import Image from "next/image";
import { QuoteItem } from "@/data/content";

interface QuoteSectionProps {
  quoteItem: QuoteItem;
  introTitle: string;
  introDescription: string;
}

export default function QuoteSection({
  quoteItem,
  introTitle,
  introDescription,
}: QuoteSectionProps) {
  return (
    <section className="bg-white pb-[50px] pt-[28px] select-none">
      <div className="mx-auto w-full max-w-[1547px] px-6 sm:px-8 2xl:px-0">
        <div className="relative mb-[95px] aspect-[1547/539] w-full overflow-hidden rounded-[24px] bg-[#f2f2f2]">
          <Image
            src="/images/photo3backgroundimg.png"
            alt=""
            fill
            sizes="(max-width: 1547px) 100vw, 1547px"
            className="object-cover"
            aria-hidden="true"
          />

          <div className="absolute bottom-[-19%] left-[-3.6%] h-[133%] w-[53.7%]">
            <Image
              src={quoteItem.image}
              alt="Celebration Success Visual"
              fill
              sizes="(max-width: 1547px) 54vw, 831px"
              className="object-contain object-bottom"
              preload={true}
            />
          </div>

          <div className="absolute right-[5.1%] top-[35%] z-10 flex w-[47%] flex-col items-end text-right">
            <blockquote className="mb-[5%] max-w-[904px] text-right text-[28px] sm:text-[44px] lg:text-[64px] font-bold italic leading-[1.05] lg:leading-[61px] text-black capitalize">
              Never Be Limited By Others People&apos;s Limited Imaginations.
            </blockquote>

            <cite className="font-plus-jakarta text-[16px] sm:text-[20px] lg:text-[24px] font-semibold not-italic leading-[26px] text-black">
              {quoteItem.author}
            </cite>
          </div>
        </div>

        {/* Lower Row - Success stories introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Header Description Left */}
          <div className="lg:col-span-4 text-left">
            <h2 className="max-w-[616px] text-[32px] sm:text-[48px] lg:text-[64px] font-medium leading-[0.9] tracking-[-0.04em] text-black">
              {introTitle}
            </h2>
          </div>

          {/* Body Copy Center */}
          <div className="lg:col-span-6 text-left">
            <p className="text-[20px] leading-[1.5] text-black opacity-80 font-sans">
              {introDescription}
            </p>
          </div>

          {/* View More Button Right */}
          <div className="lg:col-span-2 flex lg:justify-end shrink-0">
            <a
              href="#work"
              className="flex items-center gap-2.5 text-[14px] font-sans font-bold tracking-[0.13em] text-black uppercase transition-colors duration-300 hover:text-brand-orange group"
            >
              VIEW MORE
              <div className="flex items-center justify-center w-10 h-10 rounded-[24px] border-2 border-[#FF3F00] text-black group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
