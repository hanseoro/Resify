"use client";
import React from "react";
import cn from "./Navbar.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-left my-40">
      <div className="text-left">
        <p className={"text-7xl text-secondary " + cn.videobold}>
          What's yours
        </p>
        <p className={"text-7xl text-secondary " + cn.videobold}>is yours</p>
        <p className={"mt-6 text-xl text-muted " + cn.videonormal}>
          Let us keep it that way—secure homeownership in the digital
        </p>
        <p className={"text-xl text-muted " + cn.videonormal}>
          landscape to authenticate property online and in person.
        </p>

        <div
          className={
            "flex w-full max-w-sm items-center space-x-2 my-10 text-secondary " +
            cn.videomedium
          }
        >
          <Input type="email" placeholder="Enter Code" />
          <Button
            onClick={() =>
              (window.location.href = "/Certificate/Jx9R4m2NlFb78PqE3iTk")
            }
            type="submit"
            className={"bg-secondary text-primary"}
          >
            Find
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
