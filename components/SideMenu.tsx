import { X } from "lucide-react";
import React, { FC } from "react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";
interface SideMenuProps {
  isOpen: boolean;
  spanDesign?: string;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black/50 text-white/80 h-screen p-10 border-r border-r-shop-dark-green gap-6"
      >
        <div className="flex  justify-between gap-5 mb-3">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop-light-green hoverEffect "
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 tracking-wide font-semibold mb-3">
          {headerData.map((item) => (
            <Link
              href={item.href}
              key={item?.title}
              className={`hover:text-shop-light-green hoverEffect ${
                pathName === item?.href && "text-shop-light-green"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
