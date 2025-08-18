"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { StarIcon } from '../ui/StarIcon';

export function Landing() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      id="landing"
      className="relative min-h-screen w-full flex items-center justify-center p-8"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(17,17,17,1), transparent 100%),
          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        backgroundRepeat: 'no-repeat, repeat, repeat'
      }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12 relative z-10">
        <div className="flex-1 text-left" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl mb-4 font-extrabold bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Welcome to my <span className="italic font-light">portofolio</span>
          </h1>
          <p className="text-xl text-white max-w-xl mb-4">
            Hello I'm <span className="font-semibold">huza</span>. Here, you can learn more about me, i try my best to create things with{' '}
            <span role="img" aria-label="heart">❤</span>
          </p>
          <p className="text-lg text-white/50 italic" data-aos="fade-up" data-aos-delay="200">
            "eyes are all the same, but they see differently."
          </p>
        </div>
        <div className="flex-1 flex justify-center" data-aos="zoom-in" data-aos-delay="300">
          <StarIcon width={96} height={96} fill="#ffffff" />
        </div>
      </div>
    </section>
  );
}
