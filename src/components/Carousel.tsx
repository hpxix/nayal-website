"use client";
import React, { useState } from "react";
import Image from "next/image";
import AsiansOne from "@/app/images/asian-two-business-man.png";
import Asians from "@/app/images/asian-two-business-man.png";
import AsiansTwo from "@/app/images/images2.jpg";

const images = [Asians, AsiansOne, AsiansTwo];

const Carousel = ({ style }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Adjust the height values here as needed
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]" style={style}>
      <div className="w-full h-full overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt="Carousel Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>{" "}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-0.5 mb-1 ml-2 text-white bg-blue hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xs px-2 py-1.5 text-center"
      >
        {"<"}
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-0.5 mb-1 mr-2 text-white bg-blue hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xs px-2 py-1.5 text-center"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
