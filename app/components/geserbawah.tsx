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
      className="fixed right-4 bottom-3 z-50 px-8 py-4 backdrop-blur-lg rounded-full border-4 border-white/10 bg-white/5 text-white shadow-lg hover:bg-white/10 transition transform ease-in-out"
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {atBottom ? "▲" : "▼"}
    </button>
  );
}
