import Image from "next/image";
import React from "react";
import { MapPin, Star } from "lucide-react";
import { eventsCard } from "@/constant/eventsCard";
const EventsCard = () => {
  return (
    <div className="grid grid-cols-1   mx-auto justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
      {eventsCard.map((ele: any) => (
        <div
          key={ele.id}
          className="w-60 px-2 justify-between  pb-2 item-center shadow-lg hover:shadow-xl relative  mx-5  "
        >
          <div className=" relative ">
            <div key={ele.id} className="absolute justify-between px-2 pt-1 w-full text-xs flex z-50 top-0 left-0">
              <p className=" bg-slate-600/40 flex rounded-full text-center items-center pr-3 text-slate-200">
                {" "}
                <Star size={18} className="ml-2 mr-1  text-yellow-400" /> {ele.stars}
              </p>
              <p className="bg-slate-600/40 flex px-2 pt-1 rounded-full p-1 text-slate-200">
              <MapPin size={18} strokeWidth={2} className=" mr-1 text-slate-200" /> {ele.location}
              </p>
            </div>
            <Image
              className="rounded-xl "
              layout="intrinsic"
              width={250}
              height={300}
              src={`${ele.Url}`}
              alt={`${ele.title}`}
            />
          </div>
          <h2 className=" mt-2 font-bold">{ele.title}</h2>
          <p className=" mt-2 text-xs font-light ">{ele.content}</p>
          <p className="text-right text-sm text-green-500 pr-3">{ele.price}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsCard;
