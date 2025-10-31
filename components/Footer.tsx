import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { quickLinksData, categoriesData } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo></Logo>
            <SubText className="text-gray-600 text-sm">
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="hover:text-shop-light-green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle className="">Quick Links</SubTitle>
            <ul className="space-y-4 mt-4">
              {quickLinksData.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item?.href}
                    className="font-medium hover:shop-light-green hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubTitle className="">Categories</SubTitle>
            <ul className="space-y-4 mt-4">
              {categoriesData.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="font-medium hover:shop-light-green hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <SubTitle className="">News Letter</SubTitle>
            <SubText className="">
              Subscribe our news letter to receive updates and exclusive offers
            </SubText>
            <form action="" className="space-y-2">
              <Input
                className=""
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            new Date().getFullYear(){""}
            <Logo className="text-sm" />
            All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
