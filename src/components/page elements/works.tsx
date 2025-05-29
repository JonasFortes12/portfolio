import SectionTitle from "@/components/page elements/section-title";
import WorksCard from "@/components/page elements/works-card";

export default function Works() {
  return (
    <section className="w-full bg-background">
      <SectionTitle title="Projetos desenvolvidos" />
      <div
        className="grid
        grid-cols-1 gap-y-4 px-0
        lg:grid-cols-3 lg:gap-8 lg:px-12
        md:grid-cols-2 md:gap-6 md:px-6
        sm:grid-cols-1 sm:gap-y-5 sm:px-4
        "
      >
        <WorksCard
          title="Mandacaru Broker"
          description="O projeto Mandacaru Broker API é 
          uma aplicação Spring Boot que visa simular o comportamento 
          de um Home Broker de Ações."
          videoUrl="/videos/broker.webm"
          link="https://www.linkedin.com/feed/update/urn:li:activity:7172356161499860992/"
        />

        <WorksCard
          title="Meicash"
          description="O MEICash é um sistema de apoio à organização 
          financeira de Micro
            Empreendedores Individuais (MEIs)."
          videoUrl="/videos/meicash.webm"
          link="https://www.linkedin.com/feed/update/urn:li:activity:7209760252248944640/"
        />

        <WorksCard
          title="Solar System Simulation"
          description=" Fruto de um profundo estudo em computação gráfica, 
            o projeto simula o sistema solar com planetas, 
            luas, cinturão de asteroides e navegação por câmera."
          videoUrl="/videos/solar.webm"
          link="https://github.com/JonasFortes12/Solar-System-Simulation"
        />

        <WorksCard
          title="Mapa Sonoro"
          description="Mapa sonoro interativo que explora a diversidade sonora de
              Picos-PI nos anos 90, permitindo ao usuário ouvir sons de
              diferentes locais da cidade."
          videoUrl="/videos/mapa-sonoro.webm"
          link="https://mapa-sonoro-de-picos-git-main-sufato1287gmailcoms-projects.vercel.app/"
        />

        <WorksCard
          title="Landing page ELT GETEC PSI"
          description="Landing page desenvolvida para a empresa ELT GETEC PSI,
          especializada em manejo de tecnologia da informação"
          videoUrl="/videos/eltgetc.webm"
          link="https://elt-getec-psi-git-main-sufato1287-gmailcom.vercel.app/"/>
      </div>
    </section>
  );
}
