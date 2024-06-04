import About from "@/components/About/About";
import Archive from "@/components/Archive/Archive";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Project/Project";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-mycolor-400">
      <Navbar/>

      <div className="container mt-24 md:mt-36 px-10 py-4">
        <Hero/>
        <Archive/>
        <About/>
        <Project/>
      </div>

    </main>
    
    
    
    </>
  );
}
