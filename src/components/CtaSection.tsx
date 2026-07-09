export default function CtaSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-[1728px] overflow-hidden rounded-t-3xl bg-[#ffcbba] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-8 py-16 sm:px-16 lg:px-28 lg:py-24">
          <h2 className="mb-8 max-w-xl text-5xl font-medium leading-[0.9] tracking-tight text-black sm:text-7xl">
            Let&apos;s discuss your project
          </h2>
          <p className="mb-10 max-w-md text-base leading-relaxed text-black/75">
            The essential to combine empathy, creativity and rationality to meet user needs and business success
          </p>
          <a
            href="mailto:hello@maverickagency.com"
            className="inline-flex items-center gap-4 rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            Get Started
            <span className="grid h-7 w-7 place-items-center rounded-full border border-brand-orange text-brand-orange">
              &rarr;
            </span>
          </a>
        </div>

        <div className="relative min-h-[320px] overflow-hidden">
          <div className="absolute right-[-140px] top-[-150px] h-[720px] w-[720px] rounded-full border-2 border-black" />
          <div className="absolute right-[-35px] top-[10px] h-[520px] w-[520px] rounded-full border-2 border-black" />
          <div className="absolute right-[110px] top-[95px] h-[330px] w-[330px] rounded-full border-2 border-black" />
          <div className="absolute right-[250px] top-[165px] h-[170px] w-[170px] rounded-full border-2 border-black" />
          {[
            "left-[8%] top-[45%]",
            "left-[26%] top-[62%]",
            "left-[38%] top-[22%]",
            "left-[64%] top-[48%]",
            "left-[80%] top-[26%]",
          ].map((position) => (
            <span
              key={position}
              className={`absolute ${position} h-24 w-24 rounded-full border-4 border-black bg-brand-orange`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
