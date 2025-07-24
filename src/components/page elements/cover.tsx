"use client"; // Para garantir que o GSAP rode no lado do cliente

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Typist from "react-typist-component";
import DownloadButton from "@/components/page elements/bt-download-cv";

export default function Cover() {
  const [animatedRendered, setAnimatedRendered] = useState(false);

  useEffect(() => {
    // Animação dos objetos flutuantes
    gsap.fromTo(
      ".object1",
      {
        xPercent: 0,
        yPercent: -20,
      },
      {
        xPercent: 20,
        yPercent: -20,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "power3.inOut",
      }
    );

    gsap.fromTo(
      ".object2",
      {
        xPercent: 0,
        yPercent: 20,
      },
      {
        xPercent: -20,
        yPercent: 20,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "power3.inOut",
      }
    );

    setAnimatedRendered(true);
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden
     bg-[#FFFFFC] shadow-xl"
    >
      {/* Gradiente animado no fundo */}
      <div className="absolute inset-0 animate-gradient"></div>

      {/* Objeto fluido 1 */}
      <div
        className="absolute object1 
      w-[40rem] h-[40rem] bg-blue-500 opacity-80 
      rounded-full blur-[50px] top-1/4 left-1/4"
      ></div>

      {/* Objeto fluido 2 */}
      <div
        className="absolute object2 
      w-[40rem] h-[40rem] bg-violet-500 opacity-80 
      rounded-full blur-[50px] bottom-1/4 right-1/4"
      ></div>

      {/* Conteúdo central */}
      <div
        className="relative z-10 flex flex-col
        items-center justify-between min-h-full py-48 md:py-56 lg:py-64 "
      >
        <div className="text-center">
          <Typist startDelay={0} typingDelay={100} loop={false}>
            <h1 className="text-5xl font-bold text-white mx-4">
              Dev_ Jonas Fortes
            </h1>
          </Typist>

          <Typist startDelay={1700} typingDelay={70} loop={false}>
            <p className="mt-4 text-2xl text-white mx-4">
              Desenvolvendo sistemas que conectam, aprendem e otimizam.
            </p>
          </Typist>
        </div>

        <div className="mt-4">{animatedRendered && <DownloadButton />}</div>
      </div>
    </section>
  );
}
