import React from "react";
import cn from "./Navbar.module.css";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-left my-60">
      <div className="text-left">
        <p className={"text-7xl text-secondary " + cn.videobold}>
          What's yours
        </p>
        <p className={"text-7xl text-secondary " + cn.videobold}>is yours</p>
        <p className={"mt-6 text-xl text-muted " + cn.poppins}>
          Secure homeownership in the digital landscape
        </p>
        <p className={"text-xl text-muted " + cn.poppins}>
          to verify property online and in person.
        </p>
        {/* Add Button Here */}
      </div>
    </div>
  );
};

export default HeroSection;
