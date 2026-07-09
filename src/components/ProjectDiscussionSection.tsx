export default function ProjectDiscussionSection() {
  return (
    <section className="py-12 bg-[#FAF6F0] px-6 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[48.3px] overflow-hidden bg-gradient-to-r from-[rgba(255,63,0,0.3)] to-[rgba(239,183,168,0.3)] px-8 sm:px-16 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[280px] z-10">
          
          {/* Left Panel - Copy Content */}
          <div className="flex-1 flex flex-col items-start text-left z-10 max-w-xl">
            <h2 className="font-sans font-medium text-black text-[32px] sm:text-[54px] lg:text-[77.3px] tracking-[-0.04em] leading-[0.9] mb-3">
              Let&apos;s discuss your project
            </h2>
            <p className="text-[19.3px] leading-[1.5] text-black opacity-80 mb-8 max-w-[576px] font-sans">
              The essential to combine empathy, creativity and rationality to meet user needs and business success
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-[29px] rounded-[58px] bg-black pl-[29px] pr-[9.7px] py-[9.7px] h-[67.7px] text-[16.9px] font-bold uppercase tracking-[0.13em] text-white shadow-md transition-all duration-300 hover:bg-brand-orange"
            >
              GET STARTED
              <span className="flex h-[48.3px] w-[48.3px] shrink-0 items-center justify-center rounded-full border-[2.4px] border-[#FF3F00] text-white transition-colors group-hover:border-white group-hover:bg-white group-hover:text-brand-orange">
                <svg
                  className="h-[15.7px] w-[15.7px]"
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

          {/* Right Panel - Custom SVG Illustration Visual */}
          <div className="w-full lg:w-1/2 h-[200px] lg:h-[280px] absolute lg:relative right-0 bottom-0 lg:bottom-auto pointer-events-none z-0 overflow-hidden lg:overflow-visible flex items-end lg:items-center justify-end">
            <svg
              className="w-full h-full min-w-[400px] max-w-[600px] lg:max-w-none opacity-90 lg:opacity-100"
              viewBox="0 0 500 240"
              preserveAspectRatio="xMaxYMax slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric Circles centered around the bottom-right corner (approx cx=480, cy=240) */}
              <circle cx="480" cy="240" r="60" stroke="#000000" strokeWidth="1.4" />
              <circle cx="480" cy="240" r="110" stroke="#000000" strokeWidth="1.4" />
              <circle cx="480" cy="240" r="160" stroke="#000000" strokeWidth="1.4" />
              <circle cx="480" cy="240" r="210" stroke="#000000" strokeWidth="1.4" />
              <circle cx="480" cy="240" r="260" stroke="#000000" strokeWidth="1.4" />
              <circle cx="480" cy="240" r="310" stroke="#000000" strokeWidth="1.4" />
              <circle cx="480" cy="240" r="360" stroke="#000000" strokeWidth="1.4" />

              {/* Neo-brutalist styled dots: 
                  We draw the solid orange/red circle FIRST (offset to bottom-right), 
                  and the black stroke circle SECOND (centered exactly on the orbit line). */}

              {/* Dot 1 (Innermost): cx=374, cy=211, r=18 */}
              <circle cx="380" cy="217" r="18" fill="#FF3F00" />
              <circle cx="374" cy="211" r="18" stroke="#000000" strokeWidth="1.4" fill="none" />

              {/* Dot 2 (Bottom Left Middle): cx=278, cy=185, r=24 */}
              <circle cx="284" cy="191" r="24" fill="#FF3F00" />
              <circle cx="278" cy="185" r="24" stroke="#000000" strokeWidth="1.4" fill="none" />

              {/* Dot 3 (Top Middle): cx=345, cy=78, r=26 */}
              <circle cx="351" cy="84" r="26" fill="#FF3F00" />
              <circle cx="345" cy="78" r="26" stroke="#000000" strokeWidth="1.4" fill="none" />

              {/* Dot 4 (Center Left): cx=188, cy=134, r=28 */}
              <circle cx="194" cy="140" r="28" fill="#FF3F00" />
              <circle cx="188" cy="134" r="28" stroke="#000000" strokeWidth="1.4" fill="none" />

              {/* Dot 5 (Top Right): cx=425, cy=90, r=22 */}
              <circle cx="431" cy="96" r="22" fill="#FF3F00" />
              <circle cx="425" cy="90" r="22" stroke="#000000" strokeWidth="1.4" fill="none" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
