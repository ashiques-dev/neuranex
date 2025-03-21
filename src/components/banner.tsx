import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,.7),rgb(41,_216,_255,.7),rgb(255,_253,_128,.7),rgb(248,_154,_191,.7),rgb(252,_214,_255,.7))] ">
      <div className="continer">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redisgned interface -{" "}
          </span>
          <Link className="underline underline-offset-4 " href={"#"}>
            Explore the demo
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Banner;
