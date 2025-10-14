import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className=" bg-shop-light-pink ">
      <HomeBanner></HomeBanner>
      {/* <Button size='lg'>Check out</Button> */}
      {/* size="lg" ghost */}

      {/* 
      git remote add origin https://github.com/CodeWithSony/shoppingWebApp.git
git branch -M main
git push -u origin main */}
    </Container>
  );
};

export default Home;
