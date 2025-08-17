'use client';

import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setAtBottom(nearBottom);
    };

    window.addEventListener("scroll", checkPosition);
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
      className="
        fixed right-4 bottom-3 z-50 
        px-6 py-3 sm:px-4 sm:py-2 
        backdrop-blur-lg rounded-full 
        border-2 border-white/20 
        bg-white/10 text-white 
        shadow-lg 
        hover:bg-white/20 
        transition 
        duration-300 
        ease-in-out 
        transform
      "
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {atBottom ? "▲" : "▼"}
    </button>
  );
}
