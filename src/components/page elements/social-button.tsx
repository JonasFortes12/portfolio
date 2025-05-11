import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SocialButtonProps {
  icon: ReactNode;
  color: "linkedin" | "github" | "behance" | "whatsapp" | "instagram";
  text: string;
  href: string;
  disabled?: boolean;
}

export default function SocialButton({
  color,
  icon,
  text,
  href,
  disabled,
}: SocialButtonProps) {
  const colorVariants = {
    linkedin: {
      bg: "bg-[#0077b5]",
      hoverText: "hover:text-[#0077b5]",
      shadow: "hover:shadow-[0_4px_30px_0_rgba(10,102,194,0.5)]",
    },
    github: {
      bg: "bg-[#333333]",
      hoverText: "hover:text-[#333333]",
      shadow: "hover:shadow-[0_4px_30px_0_rgba(51,51,51,0.5)]",
    },
    behance: {
      bg: "bg-[#1769FF]",
      hoverText: "hover:text-[#1769FF]",
      shadow: "hover:shadow-[0_3px_30px_0_rgba(23,105,255,0.5)]",
    },
    whatsapp: {
      bg: "bg-[#25D366]",
      hoverText: "hover:text-[#25D366]",
      shadow: "hover:shadow-[0_3px_30px_0_rgba(37,211,102,0.5)]",
    },
    instagram: {
      bg: "bg-[#C13584]", // Gradiente do Instagram
      hoverText: "hover:text-[#C13584]",
      shadow: "hover:shadow-[0_3px_30px_0_rgba(192,53,132,0.5)]",
    },
  };
  return (
    <a
      href={disabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2
        px-4 py-2
        w-3/5
        border-none
      "
    >
      <Button
        disabled={disabled}
        color="primary"
        variant="outline"
        className={`
            ${colorVariants[color].bg}
            text-white
            ${colorVariants[color].hoverText}
            ${colorVariants[color].shadow}
            hover:transform hover:-translate-y-0.5 
            transition-all duration-150
            w-full
            h-full
            `}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </Button>
    </a>
  );
}
