'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [activeSection, setActiveSection] = useState("landing");
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            // --- logic sesi aktif---
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.pageYOffset >= sectionTop) {
                    const id = section.getAttribute("id");
                    if (id) current = id;
                }
            });
            setActiveSection(current);

            // --- logic hide/show header  ---
            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                // bawah
                setShowHeader(false);
            } else {
                // atas
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 border-b z-50 border-white/25 backdrop-blur-xl text-white py-4 px-6 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-4xl font-bold hover:text-yellow-300 leading-tighter transition ${activeSection === "landing"
                            ? "text-purple-600 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                            : ""
                        }`}
                >
                    KHZX
                </Link>

                <nav className="space-x-8 hidden md:flex">
                    {["about", "education", "skills", "project"].map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`hover:text-yellow-300 transition ${activeSection === id
                                    ? "text-purple-600 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                                    : ""
                                }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </nav>

                <div>
                    <Link
                        href="/login"
                        className="px-4 py-2 border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/30 transition"
                    >
                        Resume
                    </Link>
                </div>

                <div className="md:hidden">
                    <button aria-label="Open menu" className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 8h16M4 16h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
