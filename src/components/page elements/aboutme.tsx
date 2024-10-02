"use client"; // Para garantir que o GSAP rode no lado do cliente

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Usando o componente de Image do Next.js


// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
  useEffect(() => {
    // Animação GSAP para fazer os elementos surgirem de forma suave com ScrollTrigger
    gsap.fromTo(
        ".about-me-image",
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-me-image", // O elemento que vai disparar o gatilho
            start: "top 80%", // Começa quando o topo da imagem atingir 80% da altura da viewport
          },
        }
      );
  
      gsap.fromTo(
        ".about-me-text",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-me-text",
            start: "top 80%", // Anima o texto também ao atingir 80% da viewport
          },
        }
      );
  }, []);

  return (
    <div className="flex items-center justify-center flex-col md:flex-row p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* Elemento de imagem */}
      <div className="about-me-image w-64 h-64 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/images/eu.jpeg" // Substitua pelo caminho da sua imagem
          alt="Minha foto"
          width={540}
          height={540}
          className="object-cover"
        />
      </div>

      {/* Elemento de texto */}
      <div className="about-me-text max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Olá! sou Jonas Fortes</h2>
        <p className="text-lg leading-relaxed">
          Tudo que há sob o sol é temporário, mas o que é feito pelo amor dura para sempre.
        </p>
      </div>
    </div>
  );
}