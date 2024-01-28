import Navbar from "@/components/Navbar";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
// import '../styles/fonts.css';


export default async function Home() {
  const user = await currentUser();
  await axios.post("http://127.0.0.1:8000/signup_user_data", user);
  console.log(user);
  return (
    <>
      <div style={{
        maxWidth: '864px',
        margin: '0 auto'
      }}>
        <Navbar />
        <Hero />
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]" />
      </div>
    </>
  );
}
