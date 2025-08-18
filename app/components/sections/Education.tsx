"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Education() {
  const educationData = [
    {
      title: "Junior High School",
      institution: "Nurul Khoir Islamic Boarding School",
      period: "2020 - 2023",
      position: "left"
    },
    {
      title: "Secondary High School",
      institution: "Antartika 2 Vocational High School",
      period: "2023 - Present",
      position: "right"
    },
    {
      title: "Future",
      institution: "??? - ???",
      period: "202X - XXXX",
      position: "left"
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="education" className="relative min-h-screen text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-24 text-center bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
         data-aos="fade-up">
          Education
        </h2>
        {/* roadmap line */}
        <div className="absolute left-1/2 top-64 bottom-0 w-1 bg-white/30 -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-20 relative z-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between relative"
              data-aos={item.position === "left" ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
            >
              {item.position === "left" ? (
                <>
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/65 text-sm">
                      {item.institution}
                      <br />
                      {item.period}
                    </p>
                  </div>
                  <div className="w-5 h-5 bg-white rounded-full z-20" />
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="w-5 h-5 bg-white rounded-full z-20" />
                  <div className="w-1/2 pl-8 text-left">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/65 text-sm">
                      {item.institution}
                      <br />
                      {item.period}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
