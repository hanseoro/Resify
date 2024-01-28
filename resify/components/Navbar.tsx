import React from "react";
import cn from "./Navbar.module.css";
import { SignOutButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <nav className={"bg-primary shadow-lg sticky top-0 z-50 " + cn.container}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="#" className="flex items-center py-5 px-2 text-secondary">
              <span
                style={{
                  fontFamily: "var(--custom-font-family)",
                  fontWeight: "var(--custom-font-weight-semibold)",
                }}
              >
                Resify
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-5 px-3 text-secondary hover:text-opacity-80"
                style={{
                  fontFamily: "var(--custom-font-family)",
                  fontWeight: "var(--custom-font-weight-normal)",
                }}
              >
                Collective
              </a>
              <a
                href="#"
                className="py-5 px-3 text-secondary hover:text-opacity-80"
                style={{
                  fontFamily: "var(--custom-font-family)",
                  fontWeight: "var(--custom-font-weight-normal)",
                }}
              >
                Services
              </a>
              <a
                href="#"
                className="py-5 px-3 text-secondary hover:text-opacity-80"
                style={{
                  fontFamily: "var(--custom-font-family)",
                  fontWeight: "var(--custom-font-weight-normal)",
                }}
              >
                <SignInButton />
              </a>

            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              className="py-2 px-3 rounded hover:bg-opacity-80 transition duration-300"
              style={{
                fontFamily: "var(--custom-font-family)",
                fontWeight: "var(--custom-font-weight-semibold)",
                backgroundColor: "#fff", // Customize the background color
                color: "#000", // Customize the text color
                padding: "4px 8px", // Customize padding as needed
                borderRadius: "1px", // Customize border radius
                textDecoration: "none", // Remove underlines for links
              }}
            >
              <SignOutButton />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
