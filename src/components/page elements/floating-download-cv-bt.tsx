"use client";

import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";

export default function FloatingDownloadButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cover = document.getElementById("cover");
      if (!cover) return;

      const coverBottom = cover.offsetTop + cover.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      setShowButton(scrollY > coverBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executa ao carregar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <a
      href="/cv-jonasfortes.pdf"
      download
      className="fixed bottom-6 right-6 z-50 group"
    >
      <button
        className={`
          bg-blue-600 hover:bg-blue-700 text-white
          h-14 w-14 group-hover:w-52
          rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-400
          flex items-center justify-start gap-3 overflow-hidden px-4
        `}
        aria-label="Baixar Currículo"
      >
        <FileDown className="w-6 h-6 shrink-0" />

        <span
          className={`
            opacity-0 group-hover:opacity-100
            translate-x-2 group-hover:translate-x-0
            transition-all duration-300 whitespace-nowrap
          `}
        >
          Baixar Currículo
        </span>
      </button>
    </a>
  );
}
