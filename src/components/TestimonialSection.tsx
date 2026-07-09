import { Testimonial } from "@/data/content";

interface TestimonialSectionProps {
  items: Testimonial[];
}

export default function TestimonialSection({ items }: TestimonialSectionProps) {
  const featured = items[0];
  const leftItem = items[1] ?? items[0];
  const rightItem = items[1] ?? items[0];

  return (
    <section className="overflow-hidden bg-white py-24 lg:py-28">
      <div className="mb-12 flex justify-center">
        <span className="rounded-full bg-brand-orange px-5 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white">
          Our Testimonials
        </span>
      </div>

      <div className="relative mx-auto flex max-w-[1728px] items-center justify-center gap-8 px-6">
        <article className="hidden w-[820px] shrink-0 rounded-xl border border-black/10 bg-white p-12 opacity-70 xl:block xl:-ml-[640px]">
          <p className="mb-10 text-2xl font-medium leading-[1.1] text-black">
            {leftItem.quote}
          </p>
          <p className="text-lg font-medium text-black">{leftItem.name}</p>
          <p className="text-sm text-black/65">{leftItem.role}</p>
        </article>

        <article className="relative z-10 w-full max-w-[999px] shrink-0 rounded-2xl bg-[#ffcbba] p-8 sm:p-12 lg:p-16">
          <p className="mb-12 max-w-4xl text-3xl font-medium leading-[1.1] text-black sm:text-4xl lg:text-[38px]">
            {featured.quote}
          </p>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-2xl font-medium text-black">{featured.name}</p>
              <p className="text-base text-black/65">{featured.role}</p>
            </div>
            <div className="flex gap-3">
              <button className="grid h-9 w-9 place-items-center rounded-full border border-black text-lg" aria-label="Previous testimonial">
                &lsaquo;
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full border border-black text-lg" aria-label="Next testimonial">
                &rsaquo;
              </button>
            </div>
          </div>
        </article>

        <article className="hidden w-[820px] shrink-0 rounded-xl border border-black/10 bg-white p-12 opacity-70 xl:block xl:-mr-[640px]">
          <p className="mb-10 text-2xl font-medium leading-[1.1] text-black">
            {rightItem.quote}
          </p>
          <p className="text-lg font-medium text-black">{rightItem.name}</p>
          <p className="text-sm text-black/65">{rightItem.role}</p>
        </article>
      </div>
    </section>
  );
}
