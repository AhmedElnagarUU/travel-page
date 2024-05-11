import Image from "next/image";
import React from "react";

const HeroSection = ({ children }: any) => {
  return (
    
    <header id="#Home" className="h-screen  items-center justify-center mt-10 ">
<div className="mt-16 ">
      {/* imag from globals.css */}
  <div className=" img-1   flex flex-col  text-white mx-10 lg:mx-20 rounded-3xl items-center bg-cyan-500 justify-center  ">
    <h2 className="font-extrabold text-4xl lg:text-5xl">EXPLORE TRAVEL</h2>
    <h2 className="font-extrabold text-7xl  lg:text-9xl">WORLD</h2>
  </div>
</div>
    </header>
  );
};

export default HeroSection;
