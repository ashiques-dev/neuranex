import Image from "next/image";
import React from "react";
import logoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <section className="py-4 bg-black">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logoImage}
              alt="logo image"
              className="size-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30 size-10 rounded-lg inline-flex justify-center items-center sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className=" sm:flex items-center gap-6 hidden">
            <Link href={"#"} className="text-opacity-60 text-white hover:text-opacity-100 transition">About</Link>
            <Link href={"#"} className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</Link>
            <Link href={"#"} className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</Link>
            <Link href={"#"} className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</Link>
            <Link href={"#"} className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</Link>
            <button className="bg-white py-2 px-4 rounded-lg ">Get for free</button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
