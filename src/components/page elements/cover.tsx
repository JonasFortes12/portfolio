"use client"; // Para garantir que o GSAP rode no lado do cliente

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Cover() {
  
  useEffect(() => {
    // Animação dos objetos flutuantes
    gsap.fromTo(".object1", {
      xPercent: 0,
      yPercent: -30,
    }, {
      xPercent: 50,
      yPercent: -30,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power3.inOut",
    });

    gsap.fromTo(".object2", {
      xPercent: 0,
      yPercent: 20,
    }, {
      xPercent: -50,
      yPercent: 20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power3.inOut",
    });

  }, []);

  return (
    <section className="relative h-screen w-full overflow-visible">
    

      {/* Gradiente animado no fundo */}
      <div className="absolute inset-0 animate-gradient">
      </div>

      {/* Objeto fluido 1 */}
      <div className="absolute object1 w-[40rem] h-[40rem] bg-yellow-400 rounded-full opacity-60 blur-[50px] top-1/4 left-1/4"></div>

      {/* Objeto fluido 2 */}
      <div className="absolute object2 w-[40rem] h-[40rem] bg-red-600 rounded-full opacity-60 blur-[50px] bottom-1/4 right-1/4"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">Bem-vindo ao Meu Portfólio</h1>
        <p className="mt-4 text-lg text-gray-300">Explore meus projetos e criações.</p>
      </div>

      
    

    </section>

  

    
  );
};

