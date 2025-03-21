"use client";
import React, { useRef } from "react";
import helixImage from "@/assets/images/helix2.png";
import emojiStarImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section
      ref={containerRef}
      className="py-[72px] sm:py-24 bg-black text-white text-center overflow-x-clip"
    >
      <div className="container max-w-xl relative">
        <motion.div
          className=""
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt="helix image"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
          className=""
        >
          <Image
            src={emojiStarImage}
            alt="emoji star image"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl  tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row max-w-sm mx-auto gap-2.5 ">
          <input
            type="email"
            placeholder="your@email.com"
            name=""
            id=""
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>{" "}
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
