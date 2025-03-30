"use client"; // Para garantir que o GSAP rode no lado do cliente

import Cover from "@/components/page elements/cover";
import Aboutme from "@/components/page elements/aboutme";
import { useEffect } from "react";
import WhatIDo from "@/components/page elements/whatido";

export default function Home() {
  
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    let currentSectionIndex = 0;

    function scrollToSection(index: number) {
      window.scrollTo({
        top: (sections[index] as HTMLElement).offsetTop,
        behavior: "smooth", // Scroll suave
      });
    }

    function handleScroll(event: { deltaY: number; }) {
      const direction = event.deltaY > 0 ? 1 : -1; // Direção do scroll
      currentSectionIndex = Math.min(
        Math.max(0, currentSectionIndex + direction),
        sections.length - 1
      );
      scrollToSection(currentSectionIndex);
    }

    // Adiciona o evento de scroll
    window.addEventListener("wheel", handleScroll);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="main-container">

      <div id="cover" className="section h-screen w-full flex justify-center items-center">
        <Cover />
      </div>

      <div id="aboutme" className="section h-screen w-full flex-col justify-center items-center">
        <Aboutme />
      </div>

      <div id="skills" className="section h-screen w-full flex-col justify-center items-center">
        <WhatIDo />
      </div>


    </div>
  );
}