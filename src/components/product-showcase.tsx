"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";

import React, { useRef } from "react";

const ProductShowcase = () => {
  const appImageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.6, 1], [50, -50, 50]);

  return (
    <section
      className="py-[72px] sm:py-24 bg-black text-white bg-gradient-to-b from-black to-[#5d2cab]
    "
    >
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl  tracking-tighter">
          Intuitive interface
        </h2>
        <p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          className="mt-14 flex justify-center"
          style={{
            opacity,
            rotateX,
            translateY,
            transformPerspective: "800px",
          }}
        >
          <Image ref={appImageRef} src={appScreen} alt="The product image" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
