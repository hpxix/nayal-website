"use client";
import React from "react";
import Engineer from "@/app/images/asian-two-business-man.png";
import Image from "next/image";
import Button from "@/app/ui/Button";

const Body = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-5 pb-5 mb-10 bg-gradient-to-t from-white to-white">
        <h1 className="flex items-center text-sm gap-1 md:gap-32">
          <span className="flex-1 border-4 border-blue-600 py-2 px-9 rounded text-black">
            Tchery
          </span>
          <span className="flex-1 border-4 border-blue-600 py-2 px-9 rounded text-black">
            Tchery
          </span>
          <span className="flex-1 border-4 border-blue-600 py-2 px-9 rounded text-black">
            Tchery
          </span>
        </h1>
      </div>
      <div className="flex items-center space-x-4 md:space-x-24 lg:space-x-32 xl:space-x-40 justify-center mt-5 mb-10">
        <h1 className="flex">
          <span className="text-orange-200 text-xl ">
            Welcome 🚀 We Are Nayal
          </span>
        </h1>
      </div>
      <div className="flex items-center space-x-4 md:space-x-24 lg:space-x-32 xl:space-x-40 justify-center mt-1 mb-10 flex-column ">
        <h1 className="flex-column gap-8 ">
          <span className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            explicabo, maxime nam obcaecati ipsam voluptatem totam
          </span>
          <span className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            explicabo, maxime nam obcaecati 
          </span>
          <span className="text-sm font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            explicabo
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="bg-black p-4 text-white rounded flex justify-center items-center text-3xl">
          <div className="containerv">
            <h1>
              <span className="text-orange-200 text-xl">Welcome | 🎯 </span>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quod, ipsum maxime repellendus obcaecati fugiat provident
                aliquam voluptas aperiam quisquam, officia libero tempora
                dignissimos, suscipit deserunt qui exercitationem repellat id!
              </span>
            </h1>
          </div>
        </div>
        <div className="bg-grey p-3 rounded w-full">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={Engineer}
                alt="Carousel Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>{" "}
          </div>
        </div>
        <div className="bg-grey p-3 rounded w-full">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={Engineer}
                alt="Carousel Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>{" "}
          </div>
        </div>
        <div className="bg-black p-4 text-white rounded flex justify-center items-center text-3xl">
          <div className="containerv">
            <h1>
              <span className="text-orange-200 text-xl">Welcome | 🚀 </span>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quod, ipsum maxime repellendus obcaecati fugiat provident
                aliquam voluptas aperiam quisquam, officia libero tempora
                dignissimos, suscipit deserunt qui exercitationem repellat id!
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
