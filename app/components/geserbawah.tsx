'use client';

import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");

    const checkPosition = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setAtBottom(nearBottom);

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const buttonHeight = 48;

        if (footerRect.top < viewportHeight - buttonHeight) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", checkPosition);
    checkPosition();

    return () => window.removeEventListener("scroll", checkPosition);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
      className={`
        fixed right-4 bottom-3 z-50 
        px-6 py-3 sm:px-4 sm:py-2 
        backdrop-blur-lg rounded-full 
        border-2 border-white/20 
        bg-white/10 text-white 
        shadow-lg 
        hover:bg-white/20 
        transition-opacity duration-300 ease-in-out
        transform
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {atBottom ? "▲" : "▼"}
    </button>
  );
}
