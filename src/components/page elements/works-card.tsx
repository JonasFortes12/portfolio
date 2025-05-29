import { Card, CardHeader, CardBody, Button } from "@heroui/react";

interface WorksCardProps {
    title: string;
    description: string;
    videoUrl: string; // Alterado de imageUrl para videoUrl
    link: string;
}

export default function WorksCard(props: WorksCardProps) {

    return (
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{props.title}</h4>
            <small className="text-default-500 h-16">
              {props.description}
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <div className="w-full rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-xl"
              >
                <source src={props.videoUrl} type="video/webm" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <Button
              className="text-tiny w-2/3
              bg-gradient-to-r from-blue-500 to-violet-500"
              color="primary"
              radius="full"
              size="sm"
              onPress={() =>
                window.open(
                    props.link,
                  "_blank"
                )
              }
            >
              Saiba mais
            </Button>
          </CardBody>
        </Card>
    )
}