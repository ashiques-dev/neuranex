'use client'
import Link from "next/link";
import React from "react";
import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursonImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4F21a1_65%,#a46edb_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] bg-black rounded-[100%] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] " />
      <div className="container relative">
        <div className="flex items-center justify-center">
          {" "}
          <Link
            href={"#"}
            className="border py-1 px-2 rounded-lg border-white/30 "
          >
            <span className="bg-[linear-gradient(to_right,#F87BFF,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text me-3">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          {" "}
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold  tracking-tighter text-center  inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursonImage}
                alt="cursor image"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>

            <motion.div
              className="absolute top-[56px] left-[498px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt="message image"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
