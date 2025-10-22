import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner } from "@/images";

const HomeBanner = () => {
  return (
    <div className=" bg-shop-light-pink justify-between py-16  px-10 lg:px-24 rounded-lg flex items-center">
      <div className="space-y-5">
        <Title className="mb-5">
          Grab Upto 50% Off On Selected <br /> Items.
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:bg-shop-dark-green hoverEffect hover:text-white"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner}
          alt="banner-1"
          className="md:inline-flex hidden "
          width={96}
          height={96}
        ></Image>
      </div>
    </div>
  );
};

export default HomeBanner;
