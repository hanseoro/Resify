"use client";
import NavbarHome from "@/components/NavbarHome";
<<<<<<< Updated upstream
import { auth, currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import Hero from "@/components/Hero";
import { EmailAddress } from "@clerk/nextjs/server";
import { Alert } from "reactstrap";
import { useState } from "react";

=======
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
>>>>>>> Stashed changes
// import '../styles/fonts.css';

export default function Home() {
  const CallAlert = () => {
    alert("Your id is");
  };
<<<<<<< Updated upstream
=======
  /* const user = await currentUser();
>>>>>>> Stashed changes

  /* const data = {
    first_name: user?.firstName,
    last_name: user?.lastName,
    email: user?.emailAddresses[0].emailAddress,
    phone_numer: user?.phoneNumbers[0],
<<<<<<< Updated upstream
  };
  await axios.post("http://127.0.0.1:8000/signup_user_data", data); å
  console.log(user); */
=======
  }; */
  /* await axios.post("http://127.0.0.1:8000/signup_user_data", data); */

>>>>>>> Stashed changes
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
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]">
          <div
            className="relative h-full w-full px-5 py-24"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #000 40%, #28145C 100%)",
            }}
          >
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
                className="card"
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  maxWidth: "300px",
                }}
              >
<<<<<<< Updated upstream
                <h3 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
                  Card Title 1
                </h3>
                <p style={{ textAlign: "center" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="/Home"
                  onClick={alert}
                  style={{
                    display: "block", // Use inline-block for proper alignment
                    margin: "auto",
                    marginTop: "50px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none", // Remove underline from link
                    color: "#fff", // Text color
                    background: "linear-gradient(to right, #4e54c8, #8f94fb)",
                    textAlign: "center",
                    width: "calc(100% - 20px)",

                    alignItems: "center",
                  }}
                >
                  Generate Certificate ID
                </a>
=======
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
                      style={{
                        marginTop: "200px",
                        padding: "10px 20px",
                        borderRadius: "1px",
                        border: "none",
                        background: "white",
                        color: "#000",
                        display: "block",
                        margin: "auto",
                      }}
                      className={"text-secondary " + cn.videomedium}
                    >
                      GET CODE
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Here is your certificate code:
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Jx9R4m2NlFb78PqE3iTk
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Please Sign Out</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
>>>>>>> Stashed changes
              </div>

              {/* Card 2 */}
              <div
                className="card"
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  maxWidth: "300px",
                }}
              >
<<<<<<< Updated upstream
                <h3 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
                  Card Title 2
                </h3>
                <p style={{ textAlign: "center" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="/Verify"
                  style={{
                    display: "block", // Use inline-block for proper alignment
                    margin: "auto",
                    marginTop: "50px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none", // Remove underline from link
                    color: "#fff", // Text color
                    background: "linear-gradient(to right, #4e54c8, #8f94fb)",
                    textAlign: "center",
                    width: "calc(100% - 20px)",

                    alignItems: "center",
                  }}
                >
                  Verify Property
=======
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
                    style={{
                      marginTop: "200px",
                      padding: "10px 20px",
                      borderRadius: "1px",
                      border: "1px solid #fff",
                      background: "black",
                      color: "#fff",
                      display: "block",
                      margin: "auto",
                    }}
                    className={"text-secondary " + cn.videomedium}
                  >
                    VERIFY
                  </button>
>>>>>>> Stashed changes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
