import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div style={{
        maxWidth: '864px',
        margin: '0 auto'
      }}>
        <Navbar />
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#28145C_100%)]" />
      </div>
    </>
  );
}
