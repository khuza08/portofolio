import React from "react";

export function About() {
  return (
    <section id="about" className="relative py-16">
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
<header className="flex items-center justify-center mb-6">
<h1 className="font-extrabold italic text-3xl mx-4 bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">About.</h1>
  <div className="flex-1 h-[1px] bg-white/25"></div>
</header>



        {/* Main Content - Photo Left, Description Right */}
        <div className="grid gap-8 md:grid-cols-5 items-stretch">
          {/* Left Side - Photo */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full flex flex-col">
              <img
                src="https://cdn5.telesco.pe/file/fVBYfeyMReDsyn22LkDGTR5FhlC-x22f6uN_kLPzhCrLQxFYXPX8hT0KEJID6WLkj4_1eXJqqBK6lftSmzdVQcD-lnPWXH-T7laIoo20oqEyyaJcgY9zRF6e4uoHUDvgYPHLHVHly_YiC_KDqL_UqjjwtcEH5lifrK7U_Q1gteV91Bt-nHktgQrGFWCfc92Es5urFWLnWKdKSQ9J4g1fe7SSVWBhTra06F-221U9CMlZe0IXX-kkBTfqj44QLxqQ796cdjFBFcexPK34Fdbi90NcKIzpv1c8OHcdSvmGCYpO-qyJATXkZSvnurCpWE4-iQiPfytx9bPwMZAGGKWWyw.jpg"
                alt="Huza"
                className="w-full aspect-square rounded-xl object-cover ring-1 ring-white/15 mb-4 saturate-0"
              />
              <div className="text-center flex-1 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">Huza</h2>
                <p className="text-sm text-neutral-400 mb-3">Indonesian • Student</p>
                
                <dl className="grid grid-cols-1 gap-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <dt className="text-neutral-400">Based in</dt>
                    <dd className="font-medium text-white">Indonesia (WIB)</dd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <dt className="text-neutral-400">Born in</dt>
                    <dd className="font-medium text-white">Tulungagung, 05 March, 2008</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="md:col-span-3">
            <div className="h-full flex flex-col space-y-6">
              {/* Introduction */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex-1">
                <h3 className="mb-4 text-lg font-semibold text-white">'bout meh</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Student, tinkerer. I like keeping things minimal, fast, and readable. 
                  Lately I've been playing with React, Tailwind, and a sprinkle of 
                  Python/VB.NET for tooling.
                </p>
              </div>

{/* Focus */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex-1">
                <h3 className="mb-4 text-lg font-semibold text-white">What I Do</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Focused on building delightful UIs with a monochrome vibe. Open to
                  collaboration and learning new stacks.
                </p>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex-1">
                <h3 className="mb-4 text-lg font-semibold text-white">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* Discord */}
                  <a href="#" className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-indigo-500/20 p-2 group-hover:bg-indigo-500/30 transition-colors">
                        <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Discord</p>
                        <p className="text-xs text-neutral-400">@huzawastaken</p>
                      </div>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a href="t.me/huzawastaken" className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-500/20 p-2 group-hover:bg-blue-500/30 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Telegram</p>
                        <p className="text-xs text-neutral-400">@huzawastaken</p>
                      </div>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a href="instagram.com/huzawastaken" className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-pink-500/20 p-2 group-hover:bg-pink-500/30 transition-colors">
                        <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Instagram</p>
                        <p className="text-xs text-neutral-400">@huzawastaken</p>
                      </div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/khuza08" className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:bg-black/50 hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-gray-500/20 p-2 group-hover:bg-gray-500/30 transition-colors">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">GitHub</p>
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