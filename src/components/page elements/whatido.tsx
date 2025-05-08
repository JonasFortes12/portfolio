// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionTitle from "@/components/page elements/section-title";
import WhatIDoCard from "@/components/page elements/whatido-card";

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
        <WhatIDoCard
          firstTitle="Desenvolvimento de"
          secondTitle="Sistemas eficientes para o seu negócio"
          subtitle="Arquitetura robusta para aplicações escaláveis."
          imageSrc="/images/back-end-card.webp"
        />

        {/* Desenvolvimento Front-end */}
        <WhatIDoCard
          firstTitle="Desenvolvimento de"
          secondTitle="Interfaces modernas e intuitivas"
          subtitle=" Sua marca com uma cara profissional online."
          imageSrc="/images/front-end-card.webp"
        />

        {/* Criação e Arquitetura de sistemas de IA */}
        <WhatIDoCard
          firstTitle="Criação e Arquitetura de"
          secondTitle="IA´s aplicadas para resolver desafios reais"
          subtitle="Inteligência artificial a favor do seu negócio."
          imageSrc="/images/IA-card.webp"
        />

        {/* RPA */}
        <WhatIDoCard
          firstTitle="Implementação de"
          secondTitle="Robôs digitais que trabalham por você"
          subtitle="Transforme tarefas manuais em fluxos inteligentes."
          imageSrc="/images/rpa-card.webp"
        />
      </div>
    </section>
  );
}
