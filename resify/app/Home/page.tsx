"use client";
import NavbarHome from "@/components/NavbarHome";
import { auth, currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import Hero from "@/components/Hero";
import { EmailAddress } from "@clerk/nextjs/server";
import { Alert } from "reactstrap";
import { useState } from "react";

// import '../styles/fonts.css';

export default function Home() {
  const CallAlert = () => {
    alert("Your id is");
  };

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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
