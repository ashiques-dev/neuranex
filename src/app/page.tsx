import Banner from "@/components/banner";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  );
};

export default Home;
