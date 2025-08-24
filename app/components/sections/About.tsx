import React from "react";

export function About() {
  return (
    <section className="relative py-16">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <header className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-widest text-neutral-400">About</p>
          <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            I build clean UIs and practical apps.
          </h1>
          <p className="mt-3 max-w-3xl text-neutral-300">
            Student, tinkerer. I like keeping things
            minimal, fast, and readable. Lately I’ve been playing with React,
            Tailwind, and a sprinkle of Python/VB.NET for tooling.
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <img
                src="https://avatars.githubusercontent.com/u/0?v=4"
                alt="Avatar"
                className="h-16 w-16 rounded-xl object-cover ring-1 ring-white/10"
              />
              <div>
                <h2 className="text-xl font-semibold text-white">Huza</h2>
                <p className="text-sm text-neutral-400">Indonesian • Student</p>
              </div>
            </div>
            <p className="mt-4 text-neutral-300">
              Focused on building delightful UIs with a monochrome vibe. Open to
              collaboration and learning new stacks.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                <dt className="text-neutral-400">Based in</dt>
                <dd className="font-medium text-white">Indonesia (WIB)</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                <dt className="text-neutral-400">Style</dt>
                <dd className="font-medium text-white">Black & White</dd>
              </div>
            </dl>
          </div>

          {/* storyteller */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col">
            <h3 className="mb-3 text-lg font-semibold text-white">little me</h3>

            <div className="border border-white/10 rounded-xl bg-black/30 p-4 flex-1">
              <p className="text-sm text-neutral-300 leading-relaxed">
                Halo, saya Huza 👋. Saya seorang mahasiswa dari Indonesia yang suka dengan
                desain <span className="text-white font-medium">hitam putih</span>, coding,
                dan membangun aplikasi yang sederhana tapi elegan.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
