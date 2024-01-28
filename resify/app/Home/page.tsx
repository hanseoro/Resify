import NavbarHome from "@/components/NavbarHome";
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
        <Hero />
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]" />
      </div>
    </>
  );
}
