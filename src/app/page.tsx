import Banner from "@/components/banner";
import CallToAction from "@/components/call-to-action";
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
      <CallToAction />
    </>
  );
};

export default Home;
