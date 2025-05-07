// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionTitle from "@/components/page elements/section-title";
import WorkCard from "@/components/page elements/work-card";

export default function WhatIDo() {
  return (
    <section className="w-full bg-background">
      <SectionTitle title="O que eu faço ?" />
      <div
        className="grid 
        grid-cols-1 gap-y-5 mx-4
        lg:grid-cols-4 lg:gap-5 lg:px-12
        md:grid-cols-3 md:gap-5 md:px-8
        sm:grid-cols-2 sm:gap-5 sm:px-6 
      "
      >
        {/* Desenvolvimento Back-end */}
        <WorkCard
          firstTitle="Desenvolvimento de"
          secondTitle="Sistemas eficientes para o seu negócio"
          subtitle="Arquitetura robusta para aplicações escaláveis."
          imageSrc="/images/back-end-card.png"
        />

        {/* Desenvolvimento Front-end */}
        <WorkCard
          firstTitle="Desenvolvimento de"
          secondTitle="Interfaces modernas e intuitivas"
          subtitle=" Sua marca com uma cara profissional online."
          imageSrc="/images/front-end-card.jpg"
        />

        {/* Criação e Arquitetura de sistemas de IA */}
        <WorkCard
          firstTitle="Criação e Arquitetura de"
          secondTitle="IA´s aplicadas para resolver desafios reais"
          subtitle="Inteligência artificial a favor do seu negócio."
          imageSrc="/images/IA-card.jpg"
        />

        {/* RPA */}
        <WorkCard
          firstTitle="Implementação de"
          secondTitle="Robôs digitais que trabalham por você"
          subtitle="Transforme tarefas manuais em fluxos inteligentes."
          imageSrc="/images/rpa-card.jpg"
        />
      </div>
    </section>
  );
}
