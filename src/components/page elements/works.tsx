import SectionTitle from "@/components/page elements/section-title";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";

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
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Mandacaru Broker</h4>
            <small className="text-default-500 h-16">
              O projeto Mandacaru Broker API é uma aplicação Spring Boot que
              visa simular o comportamento de um Home Broker de Ações.
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="/images/mandacaru.gif"
            />
            <Button
              className="text-tiny w-2/3"
              color="primary"
              radius="full"
              size="sm"
              onPress={() =>
                window.open(
                  "https://www.linkedin.com/feed/update/urn:li:activity:7172356161499860992/",
                  "_blank"
                )
              }
            >
              Saiba mais
            </Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Meicash</h4>
            <small className="text-default-500 h-16">
              O MEICash é um sistema de apoio à organização financeira de Micro
              Empreendedores Individuais (MEIs).
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="/images/meicash.gif"
            />
            <Button
              className="text-tiny w-2/3"
              color="primary"
              radius="full"
              size="sm"
              onPress={() =>
                window.open(
                  "https://www.linkedin.com/feed/update/urn:li:activity:7209760252248944640/",
                  "_blank"
                )
              }
            >
              Saiba mais
            </Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Solar System Simulation</h4>
            <small className="text-default-500 h-16">
            Fruto de um profundo estudo em computação gráfica, 
            o projeto simula o sistema solar com planetas, 
            luas, cinturão de asteroides e navegação por câmera.
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="/images/gif-solar-system.gif"
            />
            <Button
              className="text-tiny w-2/3"
              color="primary"
              radius="full"
              size="sm"
              onPress={() => window.open(
                "https://github.com/JonasFortes12/Solar-System-Simulation", "_blank"
              )}
            >
              Saiba mais
            </Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Mapa Sonoro</h4>
            <small className="text-default-500 h-16">
              Mapa sonoro interativo que explora a diversidade sonora de
              Picos-PI nos anos 90, permitindo ao usuário ouvir sons de
              diferentes locais da cidade.
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="/images/mapa-sonoro.gif"
            />
            <Button
              className="text-tiny w-2/3"
              color="primary"
              radius="full"
              size="sm"
              onPress={() => window.open(
                "https://mapa-sonoro-de-picos-git-main-sufato1287gmailcoms-projects.vercel.app/", "_blank"
              )}
            >
              Saiba mais
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
