"use client";

import { FileDown } from "lucide-react";

export default function DownloadButton() {
  return (
    <a
      href="/cv-jonasfortes.pdf"
      download
    >
      <button
        className="flex items-center
        gap-2 bg-[#FFFFFC] text-black 
        px-4 py-2 rounded hover:shadow-lg
        hover:scale-105
        transition-transform duration-300 ease-in-out"
      >
        <FileDown className="w-6 h-6" />
        Baixar Currículo
      </button>
    </a>
  );
}
