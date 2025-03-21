import Banner from "@/components/banner";
import FAQS from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import ProductShowcase from "@/components/product-showcase";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQS />
    </>
  );
};

export default Home;
