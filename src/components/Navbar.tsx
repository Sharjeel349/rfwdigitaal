"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLink } from "@/data/content";

interface NavbarProps {
  links: NavLink[];
}

const workCategories = [
  { label: "Brand Identity", href: "/work#brand-identity" },
  { label: "Amazon KDP", href: "/work#amazon-kdp" },
  { label: "Book Covers", href: "/work#book-covers" },
  { label: "Ebooks", href: "/work#ebooks" },
  { label: "Flyers", href: "/work#flyers" },
  { label: "Presentations", href: "/work#presentations" },
  { label: "Social Media Posts", href: "/work#social-media" },
];

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-4 shadow-sm border-b border-[#E5DCD3]/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 xl:max-w-none xl:px-[86px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-display font-black text-xl tracking-wider text-charcoal">
            MAVERICK
          </span>
          <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              (pathname === "/work" && link.label === "WORK") ||
              (pathname === "/services" && link.label === "SERVICES") ||
              (pathname === "/contact" && link.label === "CONTACT") ||
              (pathname === "/" && link.label === "HOME");

            if (link.label === "WORK") {
              return (
                <div key={link.label} className="relative group py-2">
                  <Link
                    href={link.href}
                    className={`font-sans text-[14px] ${
                      isActive
                        ? "font-black text-brand-orange"
                        : "font-bold text-black hover:text-brand-orange"
                    } tracking-[0.13em] uppercase transition-colors`}
                  >
                    {link.label}
                  </Link>
                  {/* Invisible hover bridge — fills the gap so mouse doesn't lose group-hover */}
                  <div className="absolute top-full left-0 w-full h-3" />
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white/95 backdrop-blur-md border border-[#E5DCD3]/50 rounded-2xl shadow-xl py-3 px-1 flex flex-col gap-1">
                      {workCategories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          className="px-4 py-2 text-[13px] font-semibold text-black/80 hover:text-brand-orange hover:bg-brand-orange-light/10 rounded-lg transition-colors leading-[1.4] text-left block"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-[14px] ${
                  isActive
                    ? "font-black text-brand-orange"
                    : "font-bold text-black hover:text-brand-orange"
                } tracking-[0.13em] uppercase transition-colors`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group flex items-center gap-8 text-[14px] font-sans font-bold tracking-[0.13em] text-black uppercase transition-colors duration-300 hover:text-brand-orange"
          >
            GET STARTED
            <span className="flex h-10 w-10 items-center justify-center rounded-[24px] border-2 border-brand-orange text-black transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
              <svg
                className="h-5.5 w-5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full bg-charcoal/5 focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`w-4 h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-charcoal rounded-full my-0.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 overflow-y-auto ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 my-12">
          {links.map((link) => {
            const isActive =
              (pathname === "/work" && link.label === "WORK") ||
              (pathname === "/services" && link.label === "SERVICES") ||
              (pathname === "/contact" && link.label === "CONTACT") ||
              (pathname === "/" && link.label === "HOME");

            const isWork = link.label === "WORK";

            return (
              <div key={link.label} className="flex flex-col items-center gap-2">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display font-semibold text-lg tracking-widest transition-colors ${
                    isActive
                      ? "text-brand-orange font-black"
                      : "text-charcoal hover:text-brand-orange font-bold"
                  }`}
                >
                  {link.label}
                </Link>
                {isWork && (
                  <div className="flex flex-col items-center gap-2 mt-1 border-l-2 border-brand-orange/30 pl-4 py-1">
                    {workCategories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[14px] text-charcoal/70 hover:text-brand-orange transition-colors font-semibold"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange text-white text-xs font-display font-semibold tracking-wider hover:bg-charcoal transition-all duration-300 shadow-lg"
        >
          GET STARTED
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
