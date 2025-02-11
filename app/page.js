import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
