"use client";

import { useState, FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-white text-black select-none border-t border-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          
          {/* Tagline & Social Icons */}
          <div className="md:col-span-5 flex flex-col items-start justify-between text-left min-h-[140px]">
            <h3 className="text-xl font-sans font-semibold text-[#17012C] leading-snug max-w-sm mt-4">
              Culture Driven Creative Solutions
            </h3>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.6-1 1-1h3V2h-4c-3.3 0-5 1.7-5 5v1z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.002 3.002 0 0 0-2.11 2.108C0 8.024 0 12 0 12s0 3.976.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.108C24 15.976 24 12 24 12s0-3.976-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column 1 - Company */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#000000] mb-6">
              Company
            </h4>
            <nav className="flex flex-col gap-4">
              <a href="#work" className="text-xs font-sans font-semibold text-zinc-500 hover:text-black transition-colors tracking-widest uppercase">
                Work
              </a>
              <a href="#culture" className="text-xs font-sans font-semibold text-zinc-500 hover:text-black transition-colors tracking-widest uppercase">
                Culture
              </a>
              <a href="#services" className="text-xs font-sans font-semibold text-zinc-500 hover:text-black transition-colors tracking-widest uppercase">
                Services
              </a>
              <a href="#contact" className="text-xs font-sans font-semibold text-zinc-500 hover:text-black transition-colors tracking-widest uppercase">
                Contact
              </a>
            </nav>
          </div>

          {/* Nav Column 2 - Information */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#000000] mb-6">
              Information
            </h4>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-xs font-sans font-semibold text-zinc-500 hover:text-black transition-colors tracking-widest uppercase">
                Privacy Policy
              </a>
              <a href="#" className="text-xs font-sans font-semibold text-zinc-500 hover:text-black transition-colors tracking-widest uppercase">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <p className="text-xs sm:text-sm font-sans text-zinc-700 leading-normal mb-4">
              Subscribe to our weekly newsletter
            </p>
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative flex items-center bg-white rounded-full border border-black/80 p-1.5 focus-within:border-brand-orange focus-within:ring-1 focus-within:ring-brand-orange transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={submitted ? "SUBSCRIBED!" : "ENTER YOUR EMAIL"}
                  required
                  disabled={submitted}
                  className="bg-transparent pl-4 py-2 text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-black outline-none flex-1 placeholder:text-zinc-400 disabled:text-brand-orange"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  aria-label="Subscribe to newsletter"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white hover:bg-black transition-colors shrink-0 disabled:bg-zinc-800"
                >
                  {submitted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="bg-black py-8 text-center text-xs text-zinc-400">
        <p className="font-sans">© 2023 Maverick Creative Group, Inc. All rights reserved</p>
      </div>
    </footer>
  );
}
