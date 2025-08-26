'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-20 mb-10" data-aos="flip-up">
      <header
        className="mb-10 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-black text-4xl font-bold mb-2">Huzaevich Karamazov</h1>
        <p className="text-lg text-black">UI/UX Designer</p>
        <p className="mt-1 text-gray-800">Email: <a href="mailto:huzawastaken@gmail.com" className="underline">huzawastaken@gmail.com</a> | Phone: +62 812 3456 7890</p>
        <p className="text-gray-800">LinkedIn: wlewlewle | GitHub: github.com/khuza08</p>
      </header>

      <section
        className="mb-8"
        data-aos="fade-down"
      >
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-black">Profil Singkat</h2>
        <p className="text-gray-800">
          Saya seorang front-end developer dengan pengalaman lebih dari 3 tahun membangun aplikasi web responsif dan interaktif menggunakan React, Next.js, dan Tailwind CSS. Bersemangat untuk terus belajar teknologi baru dan mengembangkan solusi efisien.
        </p>
      </section>

      <section
        className="mb-8"
        data-aos="fade-down"
      >
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-black">Pendidikan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-800">
            <strong className="text-black">Pondok Pesantren Nurul Khoir</strong> — Salaf <br />
            <span className="text-gray-800 text-sm">2020 - 2023</span>
          </li>
          <li className="text-gray-800">
            <strong className="text-black">SMK Antartika 2 Sidoarjo</strong> — RPL/* <br />
            <span className="text-gray-800 text-sm">2024 - Present</span>
          </li>
        </ul>
      </section>

      <section
        className="mb-8"
        data-aos="fade-down"
      >
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-black">Pengalaman Kerja</h2>
        <h1 className="text-black font-bold">BRO, I NEED A JOB!</h1>
      </section>

      <section
        className="mb-8"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-black">Keahlian</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-x-10">
          <li className="text-gray-800">React.js</li>
          <li className="text-gray-800">Next.js</li>
          <li className="text-gray-800">TypeScript</li>
          <li className="text-gray-800">Tailwind CSS</li>
          <li className="text-gray-800">Git & GitHub</li>
          <li className="text-gray-800">TKR</li>
        </ul>
      </section>
    </main>
  );
}
