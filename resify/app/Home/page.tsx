import NavbarHome from "@/components/NavbarHome";
import cn from "@/components/Navbar.module.css";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import Hero from "@/components/Hero";
import { EmailAddress } from "@clerk/nextjs/server";
// import '../styles/fonts.css';

export default async function Home() {
  const user = await currentUser();

  const data = {
    first_name: user?.firstName,
    last_name: user?.lastName,
    email: user?.emailAddresses[0].emailAddress,
    phone_numer: user?.phoneNumbers[0],
  };
  /* await axios.post("http://127.0.0.1:8000/signup_user_data", data); */
  console.log(user);
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
                <h3 style={{ margin: "0 0 20px 0", textAlign: "center" }} className={"text-secondary " + cn.videosemibold}>
                  Generate Code
                </h3>
                <p style={{ textAlign: "left" }} className={"text-secondary " + cn.videonormal}>
                  Properties that have previously 
                  been verified by you will appear 
                  here. A unique code will be 
                  generated that you may share.
                </p>
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
                <h3 style={{ margin: "0 0 20px 0", textAlign: "center" }} className={"text-secondary " + cn.videosemibold}>
                  Property Verification
                </h3>
                <p style={{ textAlign: "left" }} className={"text-secondary " + cn.videonormal}>
                  Register owned property by verifying identity. Estates will be held in account privately until code is generated.
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
