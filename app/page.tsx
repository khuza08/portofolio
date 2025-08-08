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
      <section className="border-white/10 border-b gridvignette relative min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl mb-4 font-mono font-light">
              Welcome to my <span className="italic">portofolio</span>
            </h1>
            <p className="text-xl text-white max-w-xl font-mono mb-4">
              Hello I'm <span className="font-mono font-semibold">huza</span>. Here, you can learn more about me, i try my best to create things with{' '}
              <span role="img" aria-label="heart">❤</span>
            </p>
            <p className="text-lg text-white/50 italic font-mono">
              "eyes are all the same, but they see differently."
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <StarIcon width={96} height={96} fill="#ffffffff" />
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="min-h-screen  text-white flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold mb-8 text-center font-mono">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden">
              <div className="absolute top-[-10] left-0 w-24 h-24 bg-red-500 rounded-full blur-2xl opacity-40 pointer-events-none" />
              <h3 className="text-xl text-white/90 font-semibold mb-2 font-mono relative z-10">Past</h3>
              <p className="text-white/65 font-mono text-sm relative z-10">
                Started as a curious learner, exploring different technologies and understanding how things work behind the screen.
              </p>
            </div>

            <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden">
              <div className="absolute top-[-10] left-0 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-40 pointer-events-none" />
              <h3 className="text-xl text-white/90 font-semibold mb-2 font-mono relative z-10">Present</h3>
              <p className="text-white/65 font-mono text-sm relative z-10">
                Currently building projects, improving skills in frontend and backend, and trying to create meaningful experiences.
              </p>
            </div>

            <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden">
              <div className="absolute top-[-10] left-0 w-24 h-24 bg-green-500 rounded-full blur-2xl opacity-40 pointer-events-none" />
              <h3 className="text-xl text-white/90 font-semibold mb-2 font-mono relative z-10">Future</h3>
              <p className="text-white/65 font-mono text-sm relative z-10">
                Aiming to become a professional developer, contribute to open-source, and design tools that empower others.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="w-[80vw] mx-auto border-t border-white/10 text-center" />

      {/* roadmap */}
      <section id="education" className="relative min-h-screen  text-white px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-24 text-center font-mono">Education</h2>

          {/* roadmap line */}
          <div className="absolute left-1/2 top-64 bottom-0 w-1 bg-white/30 -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-20 relative z-10">
            {/* item 1 - left */}
            <div className="flex items-center justify-between relative">
              <div className="w-1/2 text-right pr-8">
                <h3 className="text-xl font-semibold font-mono">Junior High School</h3>
                <p className="text-white/65 font-mono text-sm">Nurul Khoir Islamic Boarding School<br />2020 - 2023</p>
              </div>
              <div className="w-5 h-5 bg-white rounded-full z-20" />
              <div className="w-1/2" />
            </div>

            {/* item 2 - right */}
            <div className="flex items-center justify-between relative">
              <div className="w-1/2" />
              <div className="w-5 h-5 bg-white rounded-full z-20" />
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-xl font-semibold font-mono">Secondary High School</h3>
                <p className="text-white/65 font-mono text-sm">Antartika 2 Vocational High School<br />2023 - Present</p>
              </div>
            </div>

            {/* item 3 - left */}
            <div className="flex items-center justify-between relative">
              <div className="w-1/2 text-right pr-8">
                <h3 className="text-xl font-semibold font-mono">Future</h3>
                <p className="text-white/65 font-mono text-sm">??? - ???<br />202X - XXXX</p>
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
          <h2 className="text-3xl font-bold text-center font-mono">Skills</h2>
          <p className="text-center text-white/65 font-mono italic">technical proficiencies</p>

          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 font-mono">
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
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">HTML</h3>
              <p className="text-white/65 text-sm font-mono">
                Solid understanding of semantic HTML and structuring web content.
              </p>
            </div>

            {/* css */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3 Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">CSS</h3>
              <p className="text-white/65 text-sm font-mono">
                Responsive design using modern CSS techniques and layouts.
              </p>
            </div>

            {/* tailwind */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                alt="Tailwind Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Tailwind</h3>
              <p className="text-white/65 text-sm font-mono">
                Responsive design using TailwindCSS.
              </p>
            </div>

            {/* ts pmo */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000"
                alt="Typescript Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">TypeScript</h3>
              <p className="text-white/65 text-sm font-mono">
                Experienced in building dynamic interfaces and interactivity.
              </p>
            </div>


            {/* js */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">JavaScript</h3>
              <p className="text-white/65 text-sm font-mono">
                Experienced in building dynamic interfaces and interactivity.
              </p>
            </div>

            {/* react */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                alt="React Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">React</h3>
              <p className="text-white/65 text-sm font-mono">
                Experienced in building dynamic interfaces and interactivity.
              </p>
            </div>
          </div>

          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 font-mono">
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
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">VS / VS Code</h3>
              <p className="text-white/65 text-sm font-mono">
                Powerful code editors with rich features for efficient coding, debugging, and extensibility.
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
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Wireshark & Nmap</h3>
              <p className="text-white/65 text-sm font-mono">
                Essential network tools for traffic analysis, network scanning, and security auditing.
              </p>
            </div>

            {/* mikrotik */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://mikrotik.com/img/mtv2/newlogo.svg"
                alt="Mikrotik Icon"
                className="w-fit h-20 mb-4 invert"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Mikrotik</h3>
              <p className="text-white/65 text-sm font-mono">
                Expert in configuring and managing Mikrotik routers for robust network infrastructure.
              </p>
            </div>

            {/* terminals (windogs terminal & kitty) */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <div className="flex space-x-4 mb-4">
                <img
                  src="https://img.icons8.com/?size=100&id=gagNo02GtaUp&format=png&color=000000"
                  alt="Windows Terminal Icon"
                  className="w-20 h-20"
                />
                <img
                  src="https://sw.kovidgoyal.net/kitty/_static/kitty.svg"
                  alt="Kitty Icon"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Terminals</h3>
              <p className="text-white/65 text-sm font-mono">
                Comfortable working with modern terminal emulators for efficient command-line workflows.
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
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Git / Github</h3>
              <p className="text-white/65 text-sm font-mono">
                Version control tools for collaboration, code management, and continuous integration.
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
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Android Studio / Netbeans</h3>
              <p className="text-white/65 text-sm font-mono">
                Versatile IDEs for mobile and Java development, debugging and tooling support, i rarely use Netbeans.
              </p>
            </div>
          </div>


          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 font-mono">
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
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Windows 10</h3>
              <p className="text-white/65 text-sm font-mono">
                i prefer Windows 10(GOOD AF), windogs 11 is trash, perform like shit, buggy ui, non-productive use only.
              </p>
            </div>

            {/* linux */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=wAP66KkT7fgn&format=png&color=000000"
                alt="ArchLNX Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Arch Linux</h3>
              <p className="text-white/65 text-sm font-mono">
                Flexweight, custom-ance, user control, rolling release model favored by advanced users.
              </p>

            </div>

            {/* kali */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
              <img
                src="https://img.icons8.com/?size=100&id=muqMY2QA2VIG&format=png&color=000000"
                alt="Kali Icon"
                className="w-20 h-20 mb-4 invert"
              />
              <h3 className="text-xl font-semibold font-mono mb-2 text-white/90">Kali Linux</h3>
              <p className="text-white/65 text-sm font-mono">
                Debian-based distro for penetration testing, ethical hacking, network analysis, and security auditing.
              </p>
            </div>

          </div>

        </div>
      </section>

      <div className="w-[80vw] mx-auto border-t border-white/10 text-center" />

      {/** project */}
      <section id="project" className="min-h-screen text-white flex items-center justify-center px-8">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-bold mb-8 text-center font-mono">My Projects</h2>

          <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80 font-mono">
            Projects that i create with ❤
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          </div>

        </div>
      </section>

    </div>
  );
}
