import React from "react";
import cn from "./Navbar.module.css";
import { SignOutButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {

    return (
        <nav className={"bg-primary shadow-lg sticky top-0 z-50"}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4"> 
                        <a href="#" className={"flex items-center py-5 px-2 text-secondary " + cn.videobold}>Resify</a>
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className={"py-5 px-4 text-secondary hover:text-opacity-80 " + cn.videonormal}>Collective</a>
                            <a href="#" className={"py-5 px-4 text-secondary hover:text-opacity-80 " + cn.videonormal}>Services</a>
                            <a href="#" className={"py-5 px-4 text-secondary hover:text-opacity-80 " + cn.videonormal}>About</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className={"py-5 px-4 text-secondary hover:text-opacity-80 " + cn.videosemibold} style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            padding: '4px 8px',
                            borderRadius: '1px',
                            textDecoration: 'none'
                        }}>Log In</a>
                    </div>
                </div>
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
