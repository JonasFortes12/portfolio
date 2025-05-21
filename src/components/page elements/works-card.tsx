import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";

interface WorksCardProps {
    title: string;
    description: string;
    imageUrl: string;
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
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src={props.imageUrl}
            />
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