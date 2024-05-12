import React from "react";
import ServiceCard from "./EventsCard";

const AdSection = () => {
  return (
    <div className="md:h-screen  items-center justify-center mt-10 ">
      <div className="mt-16 ">
        {/* imag from globals.css */}
        <div className=" img-1 h-96 md:h-screen flex flex-col  text-slate-200/50 mx-10 lg:mx-20 rounded-3xl items-center bg-slate-400/40 justify-center  ">
          <h2 className="font-extrabold text-center text-4xl  md:text-4xl lg:text-5xl"> TRAVEL</h2>
          <h2 className="font-extrabold text-center text-4xl md:text-7xl  lg:text-9xl">WITH US</h2>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
