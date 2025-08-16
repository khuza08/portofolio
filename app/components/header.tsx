'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("landing");
  const [isFloating, setIsFloating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          const id = section.getAttribute("id");
          if (id) current = id;
        }
      });
      setActiveSection(current);

      // switch to pill if scroll > 100vh dan bukan di landing
      if (window.scrollY > window.innerHeight && current !== "landing") {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && target && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed z-50 left-1/2 -translate-x-1/2
          transition-[padding,background,border-radius,top,width,border-color] duration-300 ease-[cubic-bezier(0.1,0,0.2,1)]
          ${isFloating
            ? "top-2 sm:top-4 md:top-6 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-auto max-w-none md:max-w-4xl px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
            : "top-0 w-full max-w-none px-3 sm:px-4 md:px-6 py-3 md:py-4 border-b border-white/25 backdrop-blur-xl rounded-none"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className={`text-lg sm:text-xl md:text-2xl font-bold hover:text-yellow-300 transition flex-shrink-0
              ${activeSection === "landing"
                ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                : ""}
            `}
          >
            KHZX
          </Link>

          {/* desktop nav */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 flex-shrink-0">
            {["about", "education", "skills", "project"].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`hover:text-yellow-300 transition text-sm xl:text-base whitespace-nowrap ${activeSection === id
                  ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                  : ""}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>

          {/* desktop resume btn - hidden pada medium devices untuk menghindari overlap */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/login"
              className={`px-3 xl:px-4 py-2 border border-white/25 transition text-sm xl:text-base whitespace-nowrap
                hover:bg-white/10 hover:border-white/30
                ${isFloating ? "rounded-full" : "rounded-lg"}
              `}
            >
              Resume
            </Link>
          </div>

          {/* mobile menu area */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
            {/* mobile resume btn - tampil ketika tidak floating atau di desktop kecil */}
            {(!isFloating || window.innerWidth < 640) && (
              <Link
                href="/login"
                className="px-2 sm:px-3 py-1.5 border border-white/25 transition text-xs sm:text-sm whitespace-nowrap
                  hover:bg-white/10 hover:border-white/30 rounded-lg"
              >
                Resume
              </Link>
            )}

            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="focus:outline-none p-1 flex-shrink-0"
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile dropdown menu */}
        <div
          className={`lg:hidden absolute left-1/2 -translate-x-1/2 top-full z-50 
            w-[calc(100vw-2rem)] max-w-sm mt-2
            rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-2xl p-4 sm:p-6 
            transform transition-all duration-300 origin-top ${
              isMobileMenuOpen
                ? 'opacity-100 pointer-events-auto scale-100'
                : 'opacity-0 pointer-events-none scale-95'
            }`}
          style={{ transformOrigin: 'top center' }}
        >
          {/* nav links */}
          <nav className="space-y-4 sm:space-y-6">
            {["about", "education", "skills", "project"].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={closeMobileMenu}
                className={`block text-base sm:text-lg hover:text-yellow-300 transition transform hover:translate-x-2 ${
                  activeSection === id
                    ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                    : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>

          {/* mobile resume btn in dropdown */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="block w-full text-center px-4 py-2.5 sm:py-3 border border-white/25 rounded-lg transition hover:bg-white/10 hover:border-white/30 text-sm sm:text-base"
            >
              Resume
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}