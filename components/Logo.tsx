import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "font-black text-2xl text-shop-dark-green uppercase hover:text-shop-light-green tracking-wider hoverEffect group font-sans",
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            "text-shop-light-green group-hover:text-shop-dark-green hoverEffect",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
