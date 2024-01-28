import cn from "@/components/Navbar.module.css";
import Navbar from "@/components/Navbar";
import { currentUser, useUser } from "@clerk/nextjs";

import Image from "next/image";
// import '../styles/fonts.css';

export default async function Certificate2() {
  return (
    <>
      <div
        style={{
          maxWidth: "864px",
          margin: "0 auto",
        }}
      >
        <Navbar />
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]" />
        <div className="text-center mb-8">
          <h1
            className={
              "text-3xl font-bold text-white mb-2 my-20 " + cn.videosemibold
            }
          >
            105 Straw, Irvine, CA 92618
          </h1>
          <h1 className={"text-2xl font-bold text-white mb-2 " + cn.videobold}>
            Certified Owner: Gaurav Dayal
          </h1>
          <p className={"text-md text-gray-300 " + cn.videomedium}>
            Resify Authentified
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Image
            src="/GetCertified.png"
            width="200"
            height="420"
            alt="Certified Badge"
          />
        </div>
      </div>
    </>
  );
}
