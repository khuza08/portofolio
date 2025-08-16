function StarIcon({ width = 60, height = 60, fill = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="none"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="w-full">

      {/* landing */}
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
          <div className="flex-1 text-left">
            <h1 className="text-4xl mb-4  text-white">
              Welcome to my <span className="italic">portofolio</span>
            </h1>
            <p className="text-xl text-white max-w-xl  mb-4">
              Hello I'm <span className=" font-semibold">huza</span>. Here, you can learn more about me, i try my best to create things with{' '}
              <span role="img" aria-label="heart">❤</span>
            </p>
            <p className="text-lg text-white/50 italic ">
              "eyes are all the same, but they see differently."
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <StarIcon width={96} height={96} fill="#ffffff" />
          </div>
        </div>
      </section>


      {/* roadmap */}
      <section id="education" className="relative min-h-screen  text-white px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-24 text-center ">Education</h2>

          {/* roadmap line */}
          <div className="absolute left-1/2 top-64 bottom-0 w-1 bg-white/30 -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-20 relative z-10">
            {/* item 1 - left */}
            <div className="flex items-center justify-between relative">
              <div className="w-1/2 text-right pr-8">
                <h3 className="text-xl font-semibold ">Junior High School</h3>
                <p className="text-white/65  text-sm">Nurul Khoir Islamic Boarding School<br />2020 - 2023</p>
              </div>
              <div className="w-5 h-5 bg-white rounded-full z-20" />
              <div className="w-1/2" />
            </div>

            {/* item 2 - right */}
            <div className="flex items-center justify-between relative">
              <div className="w-1/2" />
              <div className="w-5 h-5 bg-white rounded-full z-20" />
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-xl font-semibold ">Secondary High School</h3>
                <p className="text-white/65  text-sm">Antartika 2 Vocational High School<br />2023 - Present</p>
              </div>
            </div>

            {/* item 3 - left */}
            <div className="flex items-center justify-between relative">
              <div className="w-1/2 text-right pr-8">
                <h3 className="text-xl font-semibold ">Future</h3>
                <p className="text-white/65  text-sm">??? - ???<br />202X - XXXX</p>
              </div>
              <div className="w-5 h-5 bg-white rounded-full z-20" />
              <div className="w-1/2" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-[80vw] mx-auto border-t border-white/10 text-center" />


      {/* skills */}
      <section id="skills" className="min-h-screen  text-white flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold text-center ">Skills</h2>
          <p className="text-center text-white/65  italic">technical proficiencies</p>

          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 ">
            Languages that I use for UI/UX Design.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* html */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg flex flex-col items-center text-center shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5 Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">HTML</h3>
              <p className="text-white/65 text-sm ">
                buat scaffolding website, ntar di styling pake TailwindCSS.
              </p>
            </div>

            {/* css */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3 Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">CSS</h3>
              <p className="text-white/65 text-sm ">
                buat desain UI/UX dulu, tapi sekarang pake Tailwind, lebih efisien.
              </p>
            </div>

            {/* tailwind */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                alt="Tailwind Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Tailwind</h3>
              <p className="text-white/65 text-sm ">
                buat UI/UX rapi ama bagus, lebih simpel daripada normal CSS.
              </p>
            </div>

            {/* ts pmo */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000"
                alt="Typescript Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">TypeScript</h3>
              <p className="text-white/65 text-sm ">
                sama kaya JavaScript, 1112 masih belajar dikit", adaptasi.
              </p>
            </div>


            {/* js */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">JavaScript</h3>
              <p className="text-white/65 text-sm ">
                cuma buat JavaScript basic doang, kaya fitur trigger
              </p>
            </div>

            {/* react */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                alt="React Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">React</h3>
              <p className="text-white/65 text-sm ">
                buat bikin website sekolah, portofolio, framework banyak library.
              </p>
            </div>
          </div>

          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 ">
            Tools that I use for Development & Networking
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* vs / vs code */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000"
                  alt="VS Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"
                  alt="VSC Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-2 text-white/90">VS / VS Code</h3>
              <p className="text-white/65 text-sm ">
                kode editor semua orang, vscode ramah spek, visual studio haus prosesor.
              </p>
            </div>

            {/* wireshark & Nmap */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://www.wireshark.org/_astro/wireshark-logo-big.CkRjSOaC_2eT4Ah.png"
                  alt="Wireshark Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://nmap.org/images/sitelogo-2x.png"
                  alt="nmap Icon"
                  className="w-fit h-20"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Wireshark & Nmap</h3>
              <p className="text-white/65 text-sm ">
                buat cari flag CTF di level yang harus scan-analysis paket TCP/UDP.
              </p>
            </div>

            {/* mikrotik */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://mikrotik.com/img/mtv2/newlogo.svg"
                alt="Mikrotik Icon"
                className="w-fit h-20 mb-4 invert"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Mikrotik</h3>
              <p className="text-white/65 text-sm ">
                buat main main jaringan, disekolah kadang wkkwk, kadang buat testing picoCTF.
              </p>
            </div>

            {/* alacritty & kitty) */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://raw.githubusercontent.com/alacritty/alacritty/master/extra/logo/compat/alacritty-term%2Bscanlines.png"
                  alt="alacritty Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://sw.kovidgoyal.net/kitty/_static/kitty.svg"
                  alt="Kitty Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Terminals</h3>
              <p className="text-white/65 text-sm ">
                ngapa" in pakai terminal, enak, efisien, ga ribet kalo mau install package, jadi lebih simpel.
              </p>
            </div>

            {/* git / github */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                  alt="Git Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                  alt="Github Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Git / Github</h3>
              <p className="text-white/65 text-sm ">
                buat version control, naruh projek, kode, kadang buat cloud gratisan, wkwkwk.
              </p>
            </div>

            {/* android Studio / netbeans */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=000000"
                  alt="Android Studio Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=4djt356tq8UO&format=png&color=000000"
                  alt="Netbeans Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Android Studio / Netbeans</h3>
              <p className="text-white/65 text-sm ">
                IDE Versatile / cross-platform development, minusnya berat, kalo Netbeans jarang pakai, soalnya kuno.
              </p>
            </div>
          </div>


          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 ">
            Operating System that I use for non/Productive
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* dog */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=108792&format=png&color=000000"
                alt="windows 10 Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Windows 10</h3>
              <p className="text-white/65 text-sm ">
                buat kalo mepet banget, di pc aja sih, Windows 10 ini versi paling stabil aja menurutku, ga kaya windog 11
                ui berat, buggy, cpu intensive.
              </p>
            </div>

            {/* linux */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://img.icons8.com/?size=100&id=uIXgLv5iSlLJ&format=png&color=000000"
                  alt="Archlnx Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://raw.githubusercontent.com/CachyOS/CachyOS-icons/refs/heads/master/Colored/CachyOS.svg"
                  alt="Cachy Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Archlinux / CachyOS</h3>
              <p className="text-white/65 text-sm ">
                aku suka Arch/Cachy linux karena enteng, ga kaya windog, open-source
                kustomisasi sesuka hati, cocok buwat tukang otak=atik, seperti aku.
              </p>
            </div>


            {/* kali */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=muqMY2QA2VIG&format=png&color=000000"
                alt="Kali Icon"
                className="w-20 h-20 mb-4 invert"
              />
              <h3 className="text-xl font-semibold  mb-2 text-white/90">Kali Linux</h3>
              <p className="text-white/65 text-sm ">
                Distro linux berbasis Debian yang ku pake pas LKS atau buat fun belajar aja, ya picoCTF, HTB, OVTW,
                ya kadang di Arch, tapi ada tools yang kurang.
              </p>
            </div>

          </div>

        </div>
      </section>

      <div className="w-[80vw] mx-auto border-t border-white/10 text-center" />

      {/** project */}
      <section id="project" className="min-h-screen text-white flex items-center justify-center px-8">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold text-center ">My Projects</h2>
          <p className="text-center text-white/65  italic">stuff that i cooked when im bored</p>


          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 ">
            Projects that I create with ❤
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* project card 1 */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">

              <div className="absolute bottom-[-16] left-0 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 opacity-100 blur-3xl pointer-events-none" />

              <div className="overflow-hidden">
                <img
                  src="https://github.com/khuza08/webrpl1/blob/dev-huza/src/lib/assets/img/Screenshot%202025-08-14%20203523.png?raw=true"
                  alt="Project 1"
                  className="w-full h-48 object-cover transition-transform duration-500 delay-100 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 ">XII RPL-1 (WIP)</h3>
                <p className="text-sm text-white/70 mb-4">
                  Website resmi kelas XII RPL-1 generasi ke-8, menampilkan profil, kegiatan,
                  dan dokumentasi kelas dengan desain modern.
                </p>
                <div className="flex gap-2 mt-2">
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-orange-500/20 border border-orange-700/20 rounded-full hover:bg-orange-500/30 hover:border-orange-700/40 transition"
                  >
                    Svelte
                  </a>
                  <a
                    href="https://github.com/Adityanrhm/kas-management"
                    className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>


            {/* project card 2 */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">

              <div className="absolute bottom-[-16] left-0 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 opacity-100 blur-3xl pointer-events-none" />

              <div className="overflow-hidden">
                <img
                  src="https://github.com/khuza08/web_antrek2/blob/main/src/assets/images/image.png?raw=true"
                  alt="Project 2"
                  className="w-full h-48 object-cover transition-transform duration-500 delay-100 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 ">SMKANTARTIKA2SDA (WIP)</h3>
                <p className="text-sm text-white/70 mb-4">
                  Website sekolah yang dikembangkan untuk JHIC 2025 (Jagoan Hosting Infra Competition),
                  menampilkan informasi sekolah, berita, dan galeri.
                </p>
                <div className="flex gap-2 mt-2">
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-yellow-500/20 border border-yellow-700/20 rounded-full hover:bg-yellow-500/30 hover:border-yellow-700/40 transition"
                  >
                    React
                  </a>
                  <a
                    href="https://github.com/Adityanrhm/kas-management"
                    className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* project card 3 */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">

              <div className="absolute bottom-[-16] left-0 w-16 h-16 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 opacity-100 blur-3xl pointer-events-none" />

              <div className="overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/Adityanrhm/kas-management/dev/overview/login.png"
                  alt="Project 3"
                  className="w-full h-48 object-cover transition-transform duration-500 delay-100 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 ">Kas Management (WIP)</h3>
                <p className="text-sm text-white/70 mb-4">
                  Aplikasi manajemen kas kelas untuk mencatat transaksi, mengatur anggaran,
                  dan menghasilkan laporan keuangan secara otomatis.
                </p>
                <div className="flex gap-2 mt-2">
                  <a
                    href="#"
                    className="px-3 py-1 text-sm bg-red-500/20 border border-red-700/20 rounded-full hover:bg-red-500/30 hover:border-red-700/40 transition"
                  >
                    Laravel
                  </a>
                  <a
                    href="https://github.com/Adityanrhm/kas-management"
                    className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


    </div>
  );
}
