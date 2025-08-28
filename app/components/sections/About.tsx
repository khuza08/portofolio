'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="about" className="relative py-16">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <header
          className="flex items-center justify-center mb-6"
          data-aos="fade-down"
        >
          <h1 className="font-extrabold italic text-3xl mx-4 bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About.
          </h1>
          <div className="flex-1 h-[1px] bg-white/25"></div>
        </header>

        {/* Main Content - Photo Left, Description Right */}
        <div className="grid gap-8 md:grid-cols-5 items-stretch">
          {/* Left Side - Photo */}
          <div className="md:col-span-2" data-aos="fade-right">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full flex flex-col">
              <img
                src="https://avatars.githubusercontent.com/u/142514648?v=4"
                alt="Huza"
                className="w-full aspect-square rounded-xl object-cover ring-1 ring-white/15 mb-4 saturate-0"
              />
              <div className="text-center flex-1 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">Huza</h2>
                <p className="text-sm text-neutral-400 mb-3">
                  Indonesian • Student
                </p>
                <dl className="grid grid-cols-1 gap-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <dt className="text-neutral-400">Based in</dt>
                    <dd className="font-medium text-white">Indonesia (WIB)</dd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <dt className="text-neutral-400">Born in</dt>
                    <dd className="font-medium text-white">
                      Tulungagung, 05 March, 2008
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="md:col-span-3" data-aos="fade-left">
            <div className="h-full flex flex-col space-y-6">
              {/* Introduction */}
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex-1"
                data-aos="fade-up"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  'bout meh
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Student, tinkerer. I like keeping things minimal, fast, and
                  readable. Lately I've been playing with React, Tailwind, and a
                  sprinkle of Python/VB.NET for tooling.
                </p>
              </div>

              {/* Focus */}
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex-1"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  What I Do
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Focused on building delightful UIs with a monochrome vibe.
                  Open to collaboration and learning new stacks.
                </p>
              </div>

              {/* Social Links */}
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* Discord */}
                  <a
                    href="#"
                    className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-indigo-500/20 p-2 group-hover:bg-indigo-500/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-indigo-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..."></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Discord
                        </p>
                        <p className="text-xs text-neutral-400">
                          @huzawastaken
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a
                    href="t.me/huzawastaken"
                    className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-500/20 p-2 group-hover:bg-blue-500/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11.944 0A12 12 0 0 0 0 12..."></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Telegram
                        </p>
                        <p className="text-xs text-neutral-400">
                          @huzawastaken
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="instagram.com/huzawastaken"
                    className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-pink-500/20 p-2 group-hover:bg-pink-500/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-pink-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012..."></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Instagram
                        </p>
                        <p className="text-xs text-neutral-400">
                          @huzawastaken
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/khuza08"
                    className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-gray-500/20 p-2 group-hover:bg-gray-500/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373..."></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          GitHub
                        </p>
                        <p className="text-xs text-neutral-400">@khuza08</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
