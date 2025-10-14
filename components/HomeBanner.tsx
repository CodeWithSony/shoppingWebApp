import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className=" bg-shop-light-pink justify-between py-16 md:py-0 px-10 lg:px-24 rounded-lg flex items-center">
      <div>
        <Title>
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
          src={
            "https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lJTIwd2VhcmluZyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
          }
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
