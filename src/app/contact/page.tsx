"use client";

import { useState, useRef, FormEvent } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectDiscussionSection from "@/components/ProjectDiscussionSection";
import Footer from "@/components/Footer";
import { NAV_LINKS } from "@/data/content";

const clientLogos = [
  { src: "/images/Maverick-Creative_Client-Logo_Choice-Life.png", alt: "Choice Life client logo" },
  { src: "/images/Maverick-Creative_Client-Logo_The-Real.png", alt: "The Real client logo" },
  { src: "/images/Maverick-Creative_Client-Logo_Edge-Control.png", alt: "Edge Control client logo" },
  { src: "/images/Maverick-Creative_Client-Logo_News-One.png", alt: "News One client logo" },
  { src: "/images/Maverick-Creative_Client-Logo_Vitalize-Hair.png", alt: "Vitalize Hair client logo" },
  { src: "/images/Maverick-Creative_Client-Logo_The-Steve-Harvey-Show.png", alt: "The Steve Harvey Show client logo" },
  { src: "/images/Maverick-Creative_Client-Logo_MedCheck-Express.png", alt: "MedCheck Express client logo" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setFileName("");
      }, 3000);
    }
  };

  return (
    <>
      <Navbar links={NAV_LINKS} />
      <main className="flex-1 bg-white relative">
        {/* Glowing Background Accent */}
        <div className="pointer-events-none absolute top-[205px] right-[5%] w-[292px] h-[292px] rounded-full bg-gradient-to-b from-[rgba(255,63,0,0.18)] to-transparent blur-[40px] z-0 select-none"></div>

        {/* Contact Hero & Form Section */}
        <section className="relative overflow-hidden bg-[rgba(242,107,1,0.06)] pt-32 pb-20 md:py-24 lg:pt-[130px] lg:pb-[90px] z-10 border-b border-[#FAF6F0]">
          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col lg:flex-row items-stretch justify-between gap-12 relative z-10">
            
            {/* Left Copy Panel */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
              <h1 className="mb-6 text-[42px] sm:text-[60px] lg:text-[72px] font-medium leading-[1.04] tracking-[-0.04em] text-black">
                Contact Us
              </h1>

              <p className="mb-12 max-w-[580px] text-[20px] sm:text-[24px] font-normal leading-[1.28] text-black opacity-80">
                Maverick Creative Group is your urban marketing agency. Discuss your product, brand or idea with us. We’ll develop a tailored solution that meets your unique needs. With cutting-edge techniques, we deliver profitable results.
              </p>

              {/* Contact Information Details */}
              <div className="flex flex-col gap-6 w-full max-w-[400px]">
                {/* Address Card */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF3F00]/10 text-[#FF3F00]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-[16px] font-semibold leading-[1.4] text-[#FF3F00] font-sans">
                    21781 Ventura Blvd #568 ,<br />Woodland Hills, CA 91364
                  </span>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF3F00]/10 text-[#FF3F00]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:8669432163" className="text-[16px] font-semibold text-[#FF3F00] underline decoration-[#FF3F00]/50 underline-offset-4 hover:text-black hover:decoration-black transition-colors font-sans">
                    (866) 943-2163
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card Panel (Sized down for a tighter visual layout) */}
            <div className="w-full lg:w-[42%] flex items-center justify-center">
              <div className="w-full max-w-[500px] bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_6px_60px_rgba(99,90,217,0.07)] border border-zinc-100">
                <h3 className="text-[24px] font-bold text-[#FF3F00] leading-none mb-6 font-sans">
                  Get In touch
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email address Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={submitted ? "Thanks!" : "Name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={submitted}
                      className="w-full h-[58px] px-5 rounded-[10px] bg-[rgba(196,196,196,0.24)] border border-transparent focus:border-[#FF3F00] focus:bg-white text-black outline-none font-plus-jakarta text-[15px] transition-all duration-300 placeholder:text-[#8C8C8C] disabled:opacity-60"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={submitted}
                      className="w-full h-[58px] px-5 rounded-[10px] bg-[rgba(196,196,196,0.24)] border border-transparent focus:border-[#FF3F00] focus:bg-white text-black outline-none font-plus-jakarta text-[15px] transition-all duration-300 placeholder:text-[#8C8C8C] disabled:opacity-60"
                    />
                  </div>

                  {/* Message textarea */}
                  <textarea
                    placeholder="Write Message . . ."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={submitted}
                    className="w-full h-[160px] p-5 rounded-[10px] bg-[rgba(196,196,196,0.24)] border border-transparent focus:border-[#FF3F00] focus:bg-white text-black outline-none font-plus-jakarta text-[15px] transition-all duration-300 placeholder:text-[#8C8C8C] resize-none disabled:opacity-60"
                  />

                  {/* File Uploader */}
                  <div 
                    onClick={handleAttachClick}
                    className="w-full h-[58px] flex items-center justify-center gap-3 rounded-[10px] bg-[rgba(196,196,196,0.24)] hover:bg-[#C4C4C4]/35 cursor-pointer transition-all duration-300 select-none"
                  >
                    <svg className="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-[15px] font-plus-jakarta font-medium text-black">
                      {fileName ? `Attached: ${fileName}` : "Attach Files"}
                    </span>
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={submitted}
                    />
                  </div>

                  {/* Send Controls at Bottom */}
                  <div className="flex items-center gap-[14px] pt-2">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="flex h-[54px] w-[160px] items-center justify-center rounded-[100px] bg-black text-[13px] font-sans font-bold uppercase tracking-[0.13em] text-white hover:bg-[#FF3F00] transition-all duration-300 disabled:bg-zinc-800 shrink-0 cursor-pointer"
                    >
                      {submitted ? "SENDING..." : "SEND MESSAGE"}
                    </button>
                    
                    <button
                      type="submit"
                      disabled={submitted}
                      aria-label="Submit form arrow"
                      className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FF3F00] text-white hover:scale-105 hover:bg-black transition-all duration-300 disabled:bg-zinc-800 cursor-pointer shadow-md shadow-brand-orange/20 shrink-0"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Developing The Culture Column Section */}
        <section className="relative py-24 z-10 bg-white border-b border-[#FAF6F0]">
          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[86px] xl:max-w-none flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Copy Column */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h2 className="mb-6 text-[36px] sm:text-[52px] lg:text-[64px] font-medium leading-[0.98] tracking-[-0.04em] text-black">
                Developing <br className="hidden sm:inline" />
                The Culture
              </h2>

              <p className="mb-10 max-w-[620px] text-[18px] sm:text-[20px] font-normal leading-[1.5] text-black opacity-80">
                Maverick Creative Group is an urban marketing agency that empowers and innovates the culture. Our experts use cutting-edge solutions to help clients elevate their brand and achieve success. With tailored services from research to creative design, we can help you unlock your potential in the urban market.
              </p>

              {/* Get Started Button */}
              <a
                href="#contact-form-section"
                className="group flex h-[67.3px] items-center justify-center gap-[28.8px] rounded-[57.7px] bg-[#FF3F00] pl-[28.8px] pr-[9.6px] py-[9.6px] text-[16.8px] font-bold uppercase tracking-[0.13em] text-white shadow-md shadow-brand-orange/25 transition-all duration-300 hover:bg-black hover:shadow-black/25"
              >
                GET STARTED
                <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[#FF3F00] transition-colors group-hover:text-black">
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
            </div>

            {/* Right Flipped Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center items-center select-none">
              <div className="relative w-full max-w-[680px] aspect-[888/839] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/40">
                <Image
                  src="/images/MCG_Contact-Support-img2%201.png"
                  alt="Young creative painting wall graphic illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-cover scale-x-[-1]"
                  priority={false}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Our Clients Brand Row Section */}
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

        {/* CTA section (concentric circles) */}
        <ProjectDiscussionSection />
      </main>
      <Footer />
    </>
  );
}
