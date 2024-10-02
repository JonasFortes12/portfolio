"use client"; // Para garantir que o GSAP rode no lado do cliente
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function TechSkills() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalWidth = marqueeRef.current?.scrollWidth; // Largura total do conteúdo
    const windowWidth = window.innerWidth; // Largura da janela

    // Define o movimento da animação
    gsap.to(marqueeRef.current, {
      x: -totalWidth, // Move para a esquerda
      duration: 20, // Duração da animação (ajuste conforme necessário)
      ease: "linear", // Efeito linear
      repeat: -1, // Repete infinitamente
      onRepeat: () => {
        // Reposiciona o conteúdo para criar o loop infinito
        gsap.set(marqueeRef.current, { x: windowWidth }); // Reposiciona para o início
      },
    });

    return () => {
      gsap.killTweensOf(marqueeRef.current); // Para a animação quando o componente é desmontado
    };
  }, []);

  return (

    // This should be the infinite marquee component !!! Finish this code after the next step


    <div className="overflow-hidden relative h-16">
      <div
        ref={marqueeRef}
        className="whitespace-nowrap flex"
        style={{ display: "flex" }} // Garante que o flexbox funcione
      >
        {/* Substitua pelos caminhos das suas logos */}
        <Image src="/images/eu.jpeg" alt="Logo 1" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 2" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 3" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 4" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 5" width={100} height={100} className="mx-4" />

        {/* Repetindo as logos para criar um efeito contínuo */}
        <Image src="/images/eu.jpeg" alt="Logo 1" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 2" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 3" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 4" width={100} height={100} className="mx-4" />
        <Image src="/images/eu.jpeg" alt="Logo 5" width={100} height={100} className="mx-4" />
      </div>
    </div>
  );
}
