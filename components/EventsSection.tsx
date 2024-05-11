import React from "react";
import EventsCard from "./EventsCard";
import { CircleChevronDown } from "lucide-react";

function EventsSection() {
  return (
    <div  className=" mt-16 mb-20 items-center">
      <div className="   md:justify-around flex-col md:flex-row  mb-10 md:flex">
        <div className="  mx-auto md:mx-0 justify-items-center w-fit md:text-left  font-extrabold relative text-3xl ">
          <h2>Upcoming</h2>
          <h2>Events</h2>
          <div className="absolute bottom-2 bg-yellow-300 -z-10 h-3 w-20 "></div>
        </div>
        <div className=" px-10">
          <p className=" text-center md:text-left md:mt-1 mt-5">
            Some of the most popular destinations for you <br/>vist with a view
            beautiful one
          </p>
        </div>
        <div id="Events" className="">
          <div>
          <CircleChevronDown size={30} className="mt-10 md:mt-0 mx-auto"/>
          </div>
        </div>
      </div>
      <EventsCard/>
    </div>
  );
}

export default EventsSection;
