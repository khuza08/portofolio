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
              Welcome to my <span className="italic font-semibold">portofolio</span>
            </h1>
            <p className="text-xl text-white max-w-xl font-mono mb-4">
              Hello I'm <span className="font-mono">huza</span>. Here, you can learn more about me, i try my best to create things with{' '}
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
      <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center p-8">
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

    </div>
  );
}