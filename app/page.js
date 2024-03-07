import Image from "next/image";
import Hero from "./components/Hero";
import TestmonialsSec from "./components/TestmonialsSec";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-[100%] ">
      
      <Hero/>
      <TestmonialsSec/>
      
    </main>
  );
}
