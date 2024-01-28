"use client";
import NavbarHome from "@/components/NavbarHome";
import { auth, currentUser, useUser } from "@clerk/nextjs";

import axios from "axios";
import Hero from "@/components/Hero";
import { EmailAddress } from "@clerk/nextjs/server";

import { useState } from "react";

import cn from "@/components/Navbar.module.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SignOutButton } from "@clerk/nextjs";
// import '../styles/fonts.css';

export default function Home() {
  const CallAlert = () => {
    alert("Your id is");
  };
  /* const user = await currentUser();
  /* const data = {
    first_name: user?.firstName,
    last_name: user?.lastName,
    email: user?.emailAddresses[0].emailAddress,
    phone_numer: user?.phoneNumbers[0],
  };
  await axios.post("http://127.0.0.1:8000/signup_user_data", data); å
  console.log(user); */
  return (
    <>
      <div
        style={{
          maxWidth: "864px",
          margin: "0 auto",
        }}
      >
        <NavbarHome />

        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]" />
        <div className="my-20">
          <div>
            {/* Cards Container */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px",
              }}
            >
              {/* Card 1 */}
              <div
                className="card border border-muted"
                style={{
                  background: "transparent",
                  borderRadius: "1px",
                  padding: "20px",
                  maxWidth: "300px",
                }}
              >
                <h3
                  style={{ margin: "0 0 20px 0", textAlign: "center" }}
                  className={"text-secondary " + cn.videosemibold}
                >
                  Generate Code
                </h3>
                <p
                  style={{ textAlign: "left" }}
                  className={"text-secondary " + cn.videonormal}
                >
                  Properties that have previously been verified by you will
                  appear here. A unique code will be generated that you may
                  share.
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
  <button
    className={"mt-40 text-primary " + cn.videomedium + " px-5 py-2.5 border-none bg-white block mx-auto"}
  >
    GET CODE
  </button>
</AlertDialogTrigger>
                  <AlertDialogContent className={"bg-primary text-secondary " + cn.videosemibold}>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Please Save This Code:
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Jx9R4m2NlFb78PqE3iTk
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Close</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                
              </div>

              {/* Card 2 */}
              <div
                className="card border border-muted"
                style={{
                  background: "transparent",
                  borderRadius: "1px",
                  padding: "20px",
                  maxWidth: "300px",
                }}
              >
                <h3
                  style={{ margin: "0 0 20px 0", textAlign: "center" }}
                  className={"text-secondary " + cn.videosemibold}
                >
                  Property Verification
                </h3>
                <p
                  style={{ textAlign: "left" }}
                  className={"text-secondary " + cn.videonormal}
                >
                  Register owned property by verifying identity. Estates will be
                  held in account privately until code is generated.
                </p>

                <a href="/Verify">
  <button
    className={"mt-40 text-secondary " + cn.videomedium + " px-5 py-2.5 border border-white bg-black text-white block mx-auto"}
  >
    VERIFY
  </button>
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
