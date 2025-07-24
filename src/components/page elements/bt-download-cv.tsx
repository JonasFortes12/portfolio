"use client";

import { FileDown } from "lucide-react";
import { Button } from "../ui/button";

export default function DownloadButton() {
  return (
    <a href="/cv-jonasfortes.pdf" download>
      <Button
        variant={"outline"}
        className="
                  flex h-12
                  bg-[#FFFFFC]
                  hover:scale-105
                  text-black
                  hover:shadow-lg
                  items-center justify-center
                  gap-2
                  rounded-lg
                  font-medium
                  text-md
                "
      >
        <FileDown className="!h-6 !w-6" /> <p>Baixar Currículo</p>
      </Button>
    </a>
  );
}
