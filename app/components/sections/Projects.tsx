export function Projects() {
  const projects = [
    {
      title: "XII RPL-1 (WIP)",
      image: "https://github.com/khuza08/webrpl1/blob/dev-huza/src/lib/assets/img/Screenshot%202025-08-14%20203523.png?raw=true",
      description: "Website resmi kelas XII RPL-1 generasi ke-8, menampilkan profil, kegiatan, dan dokumentasi kelas dengan desain modern.",
      tech: "Svelte",
      techColor: "orange",
      github: "https://github.com/Adityanrhm/kas-management",
      gradientColor: "from-yellow-600 via-yellow-500 to-yellow-400"
    },
    {
      title: "SMKANTARTIKA2SDA (WIP)",
      image: "https://github.com/khuza08/web_antrek2/blob/main/src/assets/images/image.png?raw=true",
      description: "Website sekolah yang dikembangkan untuk JHIC 2025 (Jagoan Hosting Infra Competition), menampilkan informasi sekolah, berita, dan galeri.",
      tech: "React",
      techColor: "yellow",
      github: "https://github.com/Adityanrhm/kas-management",
      gradientColor: "from-yellow-600 via-yellow-500 to-yellow-400"
    },
    {
      title: "Kas Management (WIP)",
      image: "https://raw.githubusercontent.com/Adityanrhm/kas-management/dev/overview/login.png",
      description: "Aplikasi manajemen kas kelas untuk mencatat transaksi, mengatur anggaran, dan menghasilkan laporan keuangan secara otomatis.",
      tech: "Laravel",
      techColor: "red",
      github: "https://github.com/Adityanrhm/kas-management",
      gradientColor: "from-red-600 via-red-500 to-red-400"
    }
  ];

  // map warna
  const techColors = {
    orange: {
      bgLight: "bg-orange-500/20",
      borderLight: "border-orange-700/20",
      bgHover: "hover:bg-orange-500/30",
      borderHover: "hover:border-orange-700/40",
    },
    yellow: {
      bgLight: "bg-yellow-500/20",
      borderLight: "border-yellow-700/20",
      bgHover: "hover:bg-yellow-500/30",
      borderHover: "hover:border-yellow-700/40",
    },
    red: {
      bgLight: "bg-red-500/20",
      borderLight: "border-red-700/20",
      bgHover: "hover:bg-red-500/30",
      borderHover: "hover:border-red-700/40",
    },
  };

  const ProjectCard = ({ project }) => {
  const colorClasses = techColors[project.techColor] || techColors.orange;

  return (
    <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
      <div className={`absolute bottom-[-16px] left-0 w-16 h-16 rounded-full bg-gradient-to-r ${project.gradientColor} opacity-100 blur-3xl pointer-events-none`} />

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 delay-100 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-white/70 mb-4">{project.description}</p>

        <div className="mt-auto flex gap-2">
          <a
            href="#"
            className={`px-3 py-1 text-sm rounded-full transition border ${colorClasses.bgLight} ${colorClasses.borderLight} ${colorClasses.bgHover} ${colorClasses.borderHover}`}
          >
            {project.tech}
          </a>
          <a
            href={project.github}
            className="px-3 py-1 text-sm bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};


  return (
    <section id="project" className="min-h-screen text-white flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-center text-white/65 italic">stuff that i cooked when im bored</p>

        <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80">
          Projects that I create with ❤
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}