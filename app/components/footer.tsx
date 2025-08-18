'use client';

import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaTelegramPlane, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="relative bottom-0 left-0 w-full bg-black text-white">

      <div className="w-full bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
                GET IN<br />
                TOUCH
              </h2>
            </div>

            {/* r nav */}
            <div className="space-y-6">
              <Link
                href="/team"
                className="group flex items-center justify-between text-2xl md:text-3xl font-light text-white/90 hover:text-white transition-colors py-4 border-b border-white/20"
              >
                <span className="tracking-wide">ABOUT</span>
                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/invest"
                className="group flex items-center justify-between text-2xl md:text-3xl font-light text-white/90 hover:text-white transition-colors py-4 border-b border-white/20"
              >
                <span className="tracking-wide">RESUME</span>
                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/"
                className="group flex items-center justify-between text-2xl md:text-3xl font-light text-white/90 hover:text-white transition-colors py-4 border-b border-white/20"
              >
                <span className="tracking-wide">CONTACT</span>
                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-32 pt-8">
            {/* desc */}
            <div className="mb-8 lg:mb-0">
              <p className="text-white/70 text-base tracking-wide mb-2 font-medium">MADEBYHUZA</p>
              <p className="text-white/50 text-sm">©2025 HUZAEVICH KARAMAZOV</p>
            </div>

            {/* social */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <a
                href="/"
                className="text-white/70 hover:text-white text-base tracking-wide transition-colors font-medium"
              >
                MISSION DOCS
              </a>
              <div className="flex items-center space-x-6">
                <a
                  href="/"
                  className="border border-white/30 hover:border-white/60 hover:bg-white/5 px-6 py-3 text-white/80 hover:text-white text-sm tracking-wider transition-all font-medium"
                >
                  PRESS
                </a>
                {/* insta */}
                <a
                  href="https://instagram.com/username"
                  className="text-white/60 hover:text-pink-500 transition-colors p-2 hover:bg-white/5 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                {/* tele */}
                <a
                  href="https://t.me/username"
                  className="text-white/60 hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane className="w-6 h-6" />
                </a>
                {/* github */}
                <a
                  href="https://github.com/username"
                  className="text-white/60 hover:text-gray-300 transition-colors p-2 hover:bg-white/5 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                {/* x */}
                <a
                  href="https://twitter.com/username"
                  className="text-white/60 hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}