export function Skills() {
  const skillCategories = {
    languages: {
      title: "Languages that I use for UI/UX Design.",
      skills: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          description: "buat scaffolding website, ntar di styling pake TailwindCSS."
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          description: "buat desain UI/UX dulu, tapi sekarang pake Tailwind, lebih efisien."
        },
        {
          name: "Tailwind",
          icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
          description: "buat UI/UX rapi ama bagus, lebih simpel daripada normal CSS."
        },
        {
          name: "TypeScript",
          icon: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
          description: "sama kaya JavaScript, 1112 masih belajar dikit\", adaptasi."
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          description: "cuma buat JavaScript basic doang, kaya fitur trigger"
        },
        {
          name: "React",
          icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
          description: "buat bikin website sekolah, portofolio, framework banyak library."
        }
      ]
    },
    tools: {
      title: "Tools that I use for Development & Networking",
      skills: [
        {
          name: "VS / VS Code",
          icons: [
            "https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000",
            "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"
          ],
          description: "kode editor semua orang, vscode ramah spek, visual studio haus prosesor."
        },
        {
          name: "Wireshark & Nmap",
          icons: [
            "https://www.wireshark.org/_astro/wireshark-logo-big.CkRjSOaC_2eT4Ah.png",
            "https://nmap.org/images/sitelogo-2x.png"
          ],
          description: "buat cari flag CTF di level yang harus scan-analysis paket TCP/UDP."
        },
        {
          name: "Mikrotik",
          icon: "https://mikrotik.com/img/mtv2/newlogo.svg",
          description: "buat main main jaringan, disekolah kadang wkkwk, kadang buat testing picoCTF.",
          invert: true
        },
        {
          name: "Terminals",
          icons: [
            "https://raw.githubusercontent.com/alacritty/alacritty/master/extra/logo/compat/alacritty-term%2Bscanlines.png",
            "https://sw.kovidgoyal.net/kitty/_static/kitty.svg"
          ],
          description: "ngapa\" in pakai terminal, enak, efisien, ga ribet kalo mau install package, jadi lebih simpel."
        },
        {
          name: "Git / Github",
          icons: [
            "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
            "https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
          ],
          description: "buat version control, naruh projek, kode, kadang buat cloud gratisan, wkwkwk."
        },
        {
          name: "Android Studio / Netbeans",
          icons: [
            "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=000000",
            "https://img.icons8.com/?size=100&id=4djt356tq8UO&format=png&color=000000"
          ],
          description: "IDE Versatile / cross-platform development, minusnya berat, kalo Netbeans jarang pakai, soalnya kuno."
        }
      ]
    },
    os: {
      title: "Operating System that I use for non/Productive",
      skills: [
        {
          name: "Windows 10",
          icon: "https://img.icons8.com/?size=100&id=108792&format=png&color=000000",
          description: "buat kalo mepet banget, di pc aja sih, Windows 10 ini versi paling stabil aja menurutku, ga kaya windog 11 ui berat, buggy, cpu intensive."
        },
        {
          name: "Archlinux / CachyOS",
          icons: [
            "https://img.icons8.com/?size=100&id=uIXgLv5iSlLJ&format=png&color=000000",
            "https://raw.githubusercontent.com/CachyOS/CachyOS-icons/refs/heads/master/Colored/CachyOS.svg"
          ],
          description: "aku suka Arch/Cachy linux karena enteng, ga kaya windog, open-source kustomisasi sesuka hati, cocok buwat tukang otak=atik, seperti aku."
        },
        {
          name: "Kali Linux",
          icon: "https://img.icons8.com/?size=100&id=muqMY2QA2VIG&format=png&color=000000",
          description: "Distro linux berbasis Debian yang ku pake pas LKS atau buat fun belajar aja, ya picoCTF, HTB, OVTW, ya kadang di Arch, tapi ada tools yang kurang.",
          invert: true
        }
      ]
    }
  };

  const SkillCard = ({ skill }) => (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-md">
      {skill.icons ? (
        <div className="flex space-x-4 mb-4">
          {skill.icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`${skill.name} Icon ${index + 1}`}
              className={`w-20 h-20 ${skill.name === "Wireshark & Nmap" && index === 1 ? "w-fit" : ""}`}
            />
          ))}
        </div>
      ) : (
        <img
          src={skill.icon}
          alt={`${skill.name} Icon`}
          className={`w-20 h-20 mb-4 ${skill.invert ? "invert" : ""} ${skill.name === "Mikrotik" ? "w-fit" : ""}`}
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-white/90">{skill.name}</h3>
      <p className="text-white/65 text-sm">{skill.description}</p>
    </div>
  );

  const CategorySection = ({ category }) => (
    <>
      <div className="bg-white/5 py-2 px-4 m-4 mx-auto w-fit border border-white/10 rounded-full flex items-center justify-center text-center text-white/80">
        {category.title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </>
  );

  return (
    <section id="skills" className="min-h-screen text-white flex items-center justify-center px-8 py-24">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-center text-white/65 italic">technical proficiencies</p>

        <CategorySection category={skillCategories.languages} />
        <CategorySection category={skillCategories.tools} />
        <CategorySection category={skillCategories.os} />
      </div>
    </section>
  );
}
