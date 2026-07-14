import Image from "next/image";
import { ServiceItem } from "@/data/content";

interface ServiceSectionProps {
  content: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDescription: string;
    items: ServiceItem[];
  };
}

export default function ServiceSection({ content }: ServiceSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "branding":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      case "website":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
            className="h-8 w-8"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "marketing":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path d="M12 2.3 14.5 9l7.1.3-5.6 4.4 1.9 6.9-5.9-4-5.9 4 1.9-6.9-5.6-4.4L9.5 9 12 2.3Zm7.2 1.7.8 2.1 2.2.1-1.7 1.4.6 2.1-1.9-1.2-1.8 1.2.6-2.1-1.8-1.4 2.2-.1.8-2.1Z" />
          </svg>
        );
      case "social":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.6"
            className="h-8 w-8"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        );
      case "strategy":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            className="h-8 w-8"
          >
            <path d="m4 20 4.5-1.4L19.2 7.9a2.1 2.1 0 0 0-3-3L5.5 15.6 4 20Z" />
            <path d="m14.5 6.5 3 3" />
            <path d="M18.5 15.5h.01M20.5 12.5h.01M12.5 4h.01" />
          </svg>
        );
      case "content":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="bg-white pb-0 pt-20 select-none">
      <div className="mx-auto w-full max-w-[1365px] px-8 sm:px-12 lg:max-w-none lg:px-[86px]">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,843px)_minmax(360px,559px)] lg:gap-[72px]">
          <div className="flex min-w-0 flex-col items-start text-left">
            <span className="mb-7 inline-block rounded-[27.4px] bg-[#FF3F00] px-[18.2px] py-[4.6px] text-[16px] font-bold uppercase tracking-[0.13em] leading-[1.5] text-white shadow-sm shadow-brand-orange/20">
              {content.sectionBadge}
            </span>

            <h2 className="mb-12 max-w-[843px] text-[36px] font-medium leading-[0.9] tracking-[-0.04em] text-black sm:text-[56px] xl:text-[73px]">
              {content.sectionTitle}
            </h2>

            <p className="mb-12 max-w-[843px] text-[20px] font-normal leading-[1.5] text-black opacity-80">
              {content.sectionDescription}
            </p>

            <a
              href="/services"
              className="group flex items-center gap-[9.1px] text-[16px] font-bold uppercase tracking-[0.13em] text-black transition-colors duration-300 hover:text-brand-orange"
            >
              LEARN MORE
              <span className="flex h-[45.6px] w-[45.6px] items-center justify-center rounded-full border-[2.28px] border-[#FF3F00] text-black transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                <svg
                  className="h-[14.8px] w-[14.8px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.28}
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

          <div className="flex justify-center lg:justify-end lg:pt-[22px] xl:translate-x-[72px]">
            <div className="relative h-[398px] w-full max-w-[440px] overflow-hidden rounded-[20px] bg-[#FAF6F0] xl:h-[508px] xl:max-w-[559px]">
              <Image
                src="/images/photos2.png"
                alt="Marketing dashboard with urban creative campaign talent"
                width={1860}
                height={2493}
                sizes="(max-width: 1024px) 90vw, 559px"
                className="absolute left-1/2 top-[-160px] h-[620px] w-auto -translate-x-1/2 object-contain xl:top-[-210px] xl:h-[790px]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-[60px] grid grid-cols-2 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {content.items.map((service) => (
            <div key={service.id} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 w-full max-w-[270px]">
              <div className="flex flex-row items-start p-0 w-[83.2px] h-[64px]">
                {/* Ellipse 12 */}
                <div className="w-[64px] h-[64px] rounded-[45.2px] bg-gradient-to-r from-[rgba(158,194,194,0.4)] to-[rgba(213,203,159,0.4)] shrink-0 -mr-[44.8px]" />
                {/* Frame 279 */}
                <div className="w-[64px] h-[64px] rounded-[45.2px] bg-[#FF3F00] flex items-center justify-center text-white shrink-0 z-10">
                  {getIcon(service.iconName)}
                </div>
              </div>
              <span className="text-[32px] font-medium leading-[0.9] tracking-[-0.04em] text-black font-sans">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
