'use client';
import { useEffect, useState, useRef } from "react";

export default function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false);
  const [aboveFooter, setAboveFooter] = useState(true);
  const clickCountRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    const checkPosition = () => {
      const nearBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setAtBottom(nearBottom);
      
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const buttonHeight = 48;
        setAboveFooter(footerRect.top > buttonHeight);
      }
    };
    
    window.addEventListener("scroll", checkPosition);
    checkPosition();
    
    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  const scrollToNextSection = () => {
    // get all section class 'section'
    const sections = document.querySelectorAll('.section');
    if (sections.length === 0) {
      // if no section, scroll viewport
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      return;
    }

    // find rendered section on vp
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight / 2;
    });

    if (currentSection) {
      // find indexi
      const currentIndex = Array.from(sections).indexOf(currentSection);
      if (currentIndex < sections.length - 1) {
        // scroll next section
        const nextSection = sections[currentIndex + 1];
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // if last section, go footer
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    } else {
      // if no section rendered, go landing
      sections[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    clickCountRef.current += 1;

    if (clickCountRef.current === 1) {
      timerRef.current = setTimeout(() => {
        if (atBottom) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToNextSection();
        }
        clickCountRef.current = 0;
      }, 300); // doubleclick delay
    } else if (clickCountRef.current === 2) {
      // detect dc
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (atBottom) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
      clickCountRef.current = 0;
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
      className={`
        fixed right-4 z-50 
        px-6 py-3 sm:px-4 sm:py-2 
        backdrop-blur-lg rounded-full 
        border-2 border-white/20 
        bg-white/10 text-white 
        shadow-lg 
        hover:bg-white/20 
        transition-all duration-300 ease-in-out
        ${aboveFooter ? "bottom-3" : "bottom-20"}
      `}
    >
      {atBottom ? "▲" : "▼"}
    </button>
  );
}