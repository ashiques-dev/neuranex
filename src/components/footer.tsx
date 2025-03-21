import React from "react";
import Instagram from "@/assets/icons/insta.svg";
import Youtube from "@/assets/icons/youtube.svg";
import X from "@/assets/icons/x-social.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import TikTok from "@/assets/icons/tiktok.svg";
const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            &copy; 2024 Your company, Inc. All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5 relative">
            <li>
              <Instagram />
            </li>
            <li>
              <LinkedIn />
            </li>
            <li>
              <Youtube />
            </li>
            <li>
              <X />
            </li>
            <li>
              <TikTok />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
