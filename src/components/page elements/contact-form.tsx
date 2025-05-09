"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaWhatsapp } from "react-icons/fa";

const formContactSchema = z.object({
  name: z
    .string()
    .min(2, "Preciso de mais letras :)")
    .max(50, "Não tão longo! :/"),

  message: z.string().min(10, "Me conte mais!").max(500, "É suficiente! :)"),
});

export default function ContactForm() {
  // Define your form.
  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formContactSchema>) {
    const formattedMessage = `
      Olá, meu nome é ${values.name} e gostaria de falar sobre isso: 
      ${values.message}`.trim();

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    const whatsappNumber = "558899889688";

    const whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "width=800,height=600,left=200,top=200");

    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sua mensagem..." {...field} />
                </FormControl>
                <FormDescription>
                  Me conte mais como posso te ajudar!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-2/5 h-auto self-end gap-2 flex flex-wrap">
            <p>Enviar</p>  <FaWhatsapp className="!h-5 !w-5"/>
          </Button>
        </form>
      </Form>
    </>
  );
}
