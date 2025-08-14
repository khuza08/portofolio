'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.pageYOffset >= sectionTop) {
                    const id = section.getAttribute("id");
                    if (id !== null) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className="fixed top-0 left-0 right-0 border-b z-50 border-white/25 backdrop-blur-xl text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold uppercase tracking-wide hover:text-yellow-300 transition">KHZX</Link>

                <nav className="space-x-8 hidden md:flex">
                    <Link href="#about" className={`hover:text-yellow-300 transition ${activeSection === "about" ? "text-purple-600 drop-shadow-[0_0_8px_rgba(191,191,255,0.9)]" : ""
                        }`}>
                        About
                    </Link>
                    <Link href="#education" className={`hover:text-yellow-300 transition ${activeSection === "education" ? "text-purple-600 drop-shadow-[0_0_8px_rgba(191,191,255,0.9)]" : ""
                        }`}>
                        Education
                    </Link>
                    <Link href="#skills" className={`hover:text-yellow-300 transition ${activeSection === "skills" ? "text-purple-600 drop-shadow-[0_0_8px_rgba(191,191,255,0.9)]" : ""
                        }`}>
                        Skills
                    </Link>
                    <Link href="#project" className={`hover:text-yellow-300 transition ${activeSection === "project" ? "text-purple-600 drop-shadow-[0_0_8px_rgba(191,191,255,0.9)]" : ""
                        }`}>
                        Project
                    </Link>
                </nav>


                <div>
                    <Link href="/login" className="px-4 py-2 border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/30 transition">
                        Resume
                    </Link>
                </div>

                <div className="md:hidden">
                    <button aria-label="Open menu" className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
