import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { quickLinksData } from "@/constants/data";
import Link from "next/link";

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
                  <Link href={item?.href}>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
