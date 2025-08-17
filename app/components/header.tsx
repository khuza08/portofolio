'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("landing");
  const [isFloating, setIsFloating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

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

  // Update header height ketika layout berubah
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderHeight(rect.height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    // Update height setelah transisi selesai
    const timer = setTimeout(updateHeaderHeight, 300);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timer);
    };
  }, [isFloating]); // Re-run ketika floating state berubah

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

  const getDropdownTopPosition = () => {
    if (isFloating) {
      // sm: 15px gap, md+: 25px gap
      const gap = window.innerWidth >= 640 ? 25 : 15; // 640 = md breakpoint
      return `${headerHeight + gap}px`;
    } else {
      return `${headerHeight + 10}px`;
    }
  };

  // Helper function, check is section active? yayaya
  const isActiveMobileSection = (sectionId: string) => {
    return activeSection === sectionId;
  };

  // nav items mobail
  const navItems = ["about", "education", "skills", "project"];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed z-50 left-1/2 -translate-x-1/2
          transition-all duration-300 ease-[cubic-bezier(0.1,0,0.2,1)]
          ${isFloating
            ? "top-2 sm:top-4 md:top-6 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-fill max-w-none md:max-w-4xl px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg"
            : "top-0 w-full max-w-none px-3 sm:px-4 md:px-6 py-3 md:py-4 border-b border-white/25 backdrop-blur-xl rounded-none"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className={`text-lg sm:text-xl md:text-2xl font-bold hover:text-yellow-300 transition flex-shrink-0 mr-10
              ${activeSection === "landing"
                ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                : ""}
            `}
          >
            KHZX
          </Link>

          {/* desktop nav */}
          <nav className="hidden sm:hidden md:flex lg:flex space-x-4 xl:space-x-6 flex-shrink-0">
            {navItems.map((id) => (
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
          <div className="hidden sm:hidden md:block lg:block flex-shrink-0">
            <Link
              href="/login"
              className={`px-3 xl:px-4 py-2 border border-white/25 transition text-sm xl:text-base whitespace-nowrap ml-10
                hover:bg-white/10 hover:border-white/30
                ${isFloating ? "rounded-full" : "rounded-lg"}
              `}
            >
              Resume
            </Link>
          </div>

          {/* mobile menu area */}
          <div className="md:hidden lg:hidden flex items-center flex-shrink-0">
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
      </header>

       {/* dropdown mobail */}
      <div className={`md:hidden lg:hidden fixed inset-0 z-40 pointer-events-none`}>
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 transform transition-all duration-300 origin-top
            ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
          style={{ 
            top: getDropdownTopPosition()
          }}
        >
          <nav className="space-y-4">
            {navItems.map(id => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={closeMobileMenu}
                className={`block text-base transition relative py-1 px-3 rounded-lg
                  ${isActiveMobileSection(id) 
                    ? "text-purple-500 bg-purple-500/10 border border-purple-500/20 drop-shadow-[0_0_8px_rgba(191,191,255,0.3)]" 
                    : "hover:text-yellow-300 hover:bg-white/5"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                  {isActiveMobileSection(id) && (
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                  )}
                </div>
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 pt-4 border-t border-white/10">
            <Link 
              href="/login" 
              onClick={closeMobileMenu} 
              className="block w-full text-center px-4 py-2 rounded-lg border border-white/25 hover:bg-white/10 hover:border-white/30 text-sm transition-all duration-200"
            >
              Resume
            </Link>
          </div>

          {/* not so cool, but ill add current indicator */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="text-xs text-white/50 text-center">
              Current: <span className="text-purple-400 font-medium">
                {activeSection === "landing" ? "Home" : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}