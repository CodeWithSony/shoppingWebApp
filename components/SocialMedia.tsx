import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import React from "react";
import { TooltipContent, TooltipProvider } from "./ui/tooltip";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface Props {
  className: string;
  iconClassName: string;
  tooltipClassName: string;
}
const socialLinks = [
  {
    title: "Github",
    href: "http://github.com/CodeWithSony",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/priyanka-sahu-444a21242",
    icon: <Linkedin className="w-5 h-5" />,
  },
  { title: "Youtube", href: "", icon: <Youtube className="w-5 h-5" /> },
  { title: "Slack", href: "", icon: <Slack className="w-5 h-5" /> },
  { title: "Facebook", href: "", icon: <Facebook className="w-5 h-5" /> },
];
const SocialMedia = ({ tooltipClassName, iconClassName, className }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks?.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger>
              <Link
                key={item.title}
                rel="noopener noreferer"
                className={cn(
                  "p-2 rounded-full hover:text-white hover:border-shop-light-green hoverEffect",
                  iconClassName
                )}
                href={item?.href}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
