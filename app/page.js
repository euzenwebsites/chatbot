import Image from "next/image";
import Hero from "./components/Hero";
import TestmonialsSec from "./components/TestmonialsSec";

export default function Home() {
  return (
    <main className="w-[100%] ">
      
      <Hero/>
      <TestmonialsSec/>
      
    </main>
  );
}
