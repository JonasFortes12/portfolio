"use client"; // Para garantir que o GSAP rode no lado do cliente

import { useEffect } from "react";
import { gsap } from "gsap";
import Typist from "react-typist-component";

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
    <section className="relative h-screen w-full overflow-hidden
     bg-orange-300/20 shadow-xl">
    

      {/* Gradiente animado no fundo */}
      <div className="absolute inset-0 animate-gradient">
      </div>

      {/* Objeto fluido 1 */}
      <div className="absolute object1 
      w-[40rem] h-[40rem] bg-yellow-400/80 opacity-80 
      rounded-full blur-[50px] top-1/4 left-1/4"></div>

      {/* Objeto fluido 2 */}
      <div className="absolute object2 
      w-[40rem] h-[40rem] bg-red-500/80 opacity-80 
      rounded-full blur-[50px] bottom-1/4 right-1/4"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center 
      justify-center h-full">
        
        <Typist startDelay={0} typingDelay={100} loop={false}>
          <h1 className="text-5xl font-bold text-white">Dev_ Jonas Fortes</h1>
        </Typist>

        <Typist startDelay={1700} typingDelay={70}  loop={false}>
          <p className="mt-4 text-2xl text-white">
          Desenvolvendo sistemas que conectam, aprendem e otimizam.
          </p>
        </Typist>

        

        <p className="">
        
        </p>

      </div>

      
    

    </section>

  

    
  );
};

