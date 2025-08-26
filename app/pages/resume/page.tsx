// pages/resume.tsx
import React from "react";

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10 mb-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Nama Kamu</h1>
        <p className="text-lg text-gray-600">Front-End Developer | Software Engineer</p>
        <p className="mt-1 text-gray-500">Email: nama@example.com | Phone: +62 812 3456 7890</p>
        <p className="text-gray-500">LinkedIn: linkedin.com/in/namakamu | GitHub: github.com/namakamu</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Profil Singkat</h2>
        <p>
          Saya seorang front-end developer dengan pengalaman lebih dari 3 tahun membangun aplikasi web responsif dan interaktif menggunakan React, Next.js, dan Tailwind CSS. Bersemangat untuk terus belajar teknologi baru dan mengembangkan solusi efisien.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Pendidikan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>SMK Negeri 1 Surabaya</strong> — Teknik Komputer dan Jaringan <br />
            <span className="text-gray-600 text-sm">2019 - 2022</span>
          </li>
          <li>
            <strong>SMA Negeri 2 Surabaya</strong> — IPA <br />
            <span className="text-gray-600 text-sm">2017 - 2019</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Pengalaman Kerja</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-bold">Front-End Developer - PT Teknologi Indonesia</h3>
            <p className="italic text-gray-600 text-sm">Januari 2023 - Sekarang</p>
            <ul className="list-disc list-inside mt-2">
              <li>Mengembangkan aplikasi web menggunakan React dan Next.js dengan Tailwind CSS.</li>
              <li>Meningkatkan performa aplikasi sebesar 30% melalui optimasi kode.</li>
              <li>Bekerjasama dengan tim desain dan backend untuk integrasi API.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold">Magang Web Developer - PT Kreatif Digital</h3>
            <p className="italic text-gray-600 text-sm">Agustus 2021 - Desember 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Membantu pengembangan landing page dan fitur front-end pada website klien.</li>
              <li>Menggunakan teknologi HTML, CSS, JavaScript, dan React.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Keahlian</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-x-10">
          <li>React.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>REST API Integration</li>
        </ul>
      </section>
    </main>
  );
}
