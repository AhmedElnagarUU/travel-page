import { CircleChevronDown } from "lucide-react";
import React from "react";
import TopDestinationCard from "./TopDestinationCard";

const TopDestinations = () => {
  return (
    <div>
      <div id="Pakages" className=" mt-16 mb-10 items-center">
        <div className="   md:justify-around flex-col md:flex-row  mb-10 md:flex">
          <div className="  mx-auto md:mx-0 justify-items-center w-fit md:text-left  font-extrabold relative text-3xl ">
            <h2>Top</h2>
            <h2>Destinations</h2>
            <div className="absolute bottom-2 bg-yellow-300 -z-10 h-3 w-40 "></div>
          </div>
          <div className=" px-10">
            <p className="text-center mt-10 md:mt-0 md:text-left">
              Some of the most popular destinations for you <br />
              vist with a view beautiful one
            </p>
          </div>
          <div>
            <div>
              <CircleChevronDown size={30} className="mt-10 md:mt-0 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 justify-center">
      <TopDestinationCard/>

      </div>
    </div>
  );
};

export default TopDestinations;
