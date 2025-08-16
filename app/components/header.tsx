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
        handleScroll(); // scroll handler
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
                    ? "top-3 sm:top-6 w-[95%] sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
                    : "top-0 w-full px-4 sm:px-6 py-3 sm:py-4 border-b border-white/25 backdrop-blur-xl rounded-none"
                }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className={`text-xl sm:text-2xl font-bold hover:text-yellow-300 transition
                            ${activeSection === "landing"
                                ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                                : ""}
                            ${isFloating ? "sm:mr-10" : ""}
                        `}
                    >
                        KHZX
                    </Link>

                    {/* desktop nav */}
                    <nav className="space-x-4 lg:space-x-6 hidden md:flex">
                        {["about", "education", "skills", "project"].map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={`hover:text-yellow-300 transition text-sm lg:text-base ${activeSection === id
                                    ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                                    : ""}`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        ))}
                    </nav>

                    {/* desktop resumue btn */}
                    <div className="hidden md:block">
                        <Link
                            href="/login"
                            className={`px-3 lg:px-4 py-2 border border-white/25 transition text-sm lg:text-base
                                hover:bg-white/10 hover:border-white/30
                                ${isFloating ? "rounded-full sm:ml-10" : "rounded-lg"}
                            `}
                        >
                            Resume
                        </Link>
                    </div>

                    {/* mobile menu btn */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* mobile resmue btn (only when not floating) */}
                        {!isFloating && (
                            <Link
                                href="/login"
                                className="px-3 py-1.5 border border-white/25 transition text-sm
                                    hover:bg-white/10 hover:border-white/30 rounded-lg"
                            >
                                Resume
                            </Link>
                        )}
                        
                        <button 
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu" 
                            className="focus:outline-none p-1"
                        >
                            <svg
                                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300${
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

            {/* mobile menu overlay */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
                    isMobileMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* blur */}
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                ></div>
                
                {/* mobile menu */}
                <div
                    className={`absolute top-0 right-0 h-full w-64 sm:w-80 bg-gray-900/95 backdrop-blur-xl border-l border-white/20 shadow-2xl transform transition-transform duration-300 ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="p-6 pt-20">
                        {/* nav link */}
                        <nav className="space-y-6">
                            {["about", "education", "skills", "project"].map((id) => (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    onClick={closeMobileMenu}
                                    className={`block text-lg hover:text-yellow-300 transition transform hover:translate-x-2 ${
                                        activeSection === id
                                            ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                                            : ""
                                    }`}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Link>
                            ))}
                        </nav>

                        {/* mobil resum btn */}
                        <div className="mt-8 pt-6 border-t border-white/20">
                            <Link
                                href="/login"
                                onClick={closeMobileMenu}
                                className="block w-full text-center px-4 py-3 border border-white/25 rounded-lg transition
                                    hover:bg-white/10 hover:border-white/30"
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}