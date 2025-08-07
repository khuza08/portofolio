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
    <div className="gridvignette relative min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        {/* landing */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl mb-4 font-mono font-light">
            Welcome to my <span className="italic font-semibold">portofolio</span>
          </h1>
          <p className="text-xl text-white max-w-xl font-mono ">
            Hello I'm <span className="font-mono">huza</span>. Here, you can learn more about me, i try my best to create things with{' '}
            <span role="img" aria-label="heart">❤</span>
          </p>
          <p className="text-lg text-white/50 mb-6 italic font-mono">
            "eyes are all the same, but they see differently."
          </p>
        </div>

        {/* icon */}
        <div className="flex-1 flex justify-center">
          <StarIcon width={96} height={96} fill="#ffffffff" />
        </div>

      </div>
    </div>

  );
}
