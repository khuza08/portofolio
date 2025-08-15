'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [activeSection, setActiveSection] = useState("landing");
    const [isFloating, setIsFloating] = useState(false);

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

            // aktifkan pill kalau scroll > 100vh dan bukan di landing
            if (window.scrollY > window.innerHeight && current !== "landing") {
                setIsFloating(true);
            } else {
                setIsFloating(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // cek pertama kali
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed z-50 left-1/2 -translate-x-1/2
            transition-[padding,background,border-radius,top,width,border-color] duration-300 ease-[cubic-bezier(0.1,0,0.2,1)]
            ${isFloating
                ? "top-6 w-auto px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
                : "top-0 w-full px-6 py-4 border-b border-white/25 backdrop-blur-xl rounded-none border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-2xl font-bold hover:text-yellow-300 transition
                        ${activeSection === "landing"
                            ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                            : ""}
                        ${isFloating ? "mr-10" : ""}
                    `}
                >
                    KHZX
                </Link>

                <nav className="space-x-6 hidden md:flex">
                    {["about", "education", "skills", "project"].map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`hover:text-yellow-300 transition ${activeSection === id
                                ? "text-purple-500 drop-shadow-[0_0_8px_rgba(191,191,255,0.5)]"
                                : ""}`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </nav>

                <div>
                    <Link
                        href="/login"
                        className={`px-4 py-2 border border-white/25 transition
                            hover:bg-white/10 hover:border-white/30
                            ${isFloating ? "rounded-full ml-10" : "rounded-lg"}
                        `}
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
