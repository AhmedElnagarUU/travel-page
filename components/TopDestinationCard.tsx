import { topDestination } from "@/constant/topDestination";
import { Sparkle } from "lucide-react";
import Image from "next/image";

const TopDestinationCard = () => {
  return (
    <>
      {topDestination.map(
        (ele: { id: any; imgUrl: any; title: string; content: string }) => (
          <div key={ele.id} className=" mt-5  mx-auto lg:mx-0  relative">
            <Image
              src={`${ele.imgUrl}`}
              alt={`${ele.imgUrl}`}
              layout=""
              width={300}
              height={300}
              className="h-96 w-72 lg:w-full"
            />
            <div className="absolute text-slate-200 bg-slate-500/30 top-44">
              <h2 className="text-extrabold text-4xl text-center">{ele.title}</h2>
              <div className="flex text-center justify-center mx-auto"><Sparkle /><Sparkle /><Sparkle /><Sparkle /></div>
              <p className="text-sm text-center px-10 mt-3">{ele.content}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default TopDestinationCard;
