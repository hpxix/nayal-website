"use client";
import React, { useState } from "react";
import SubLogo from "./SubLogo";
import NayalLogo from "../images/nayal.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Buttons/Button";
import Carousel from "../carrousel/Carousel";

function Header() {
  const router = useRouter();
  const [isPinging, setIsPinging] = useState(false);

  const handlePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      router.push("/");
      setIsPinging(false);
    }, 400);
  };

  return (
    <>
      <div className="w-full h-20 bg-black flex justify-center items-center">
        <div className="flex">
          <button
            className="custom-btn btn-16 px-3 py-3 rounded text-white right-[600px]"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="custom-btn btn-16 px-3 rounded text-white right-[500px]"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button className="custom-btn btn-16 px-3 rounded text-white right-[400px]">
            Services
          </button>
        </div>
        <div className="flex">
          <Button className="px-3 py-3 rounded text-white left-[700px]">
            Contact Us
          </Button>
          <button className="custom-btn btn-16 px-2 rounded text-white left-[450px]">
            Blogs
          </button>
          <button className="custom-btn btn-16 px-2 rounded text-white left-[200px]">
            About us
          </button>
        </div>
      </div>
      <div
        className="flex flex-col items-center relative"
        style={{ zIndex: 40 }}
      >
        <Image
          src={NayalLogo}
          alt="Element"
          width={200}
          height={200}
          className={`absolute ${isPinging ? "animate-ping" : ""}`}
          style={{ top: "-80px" }}
          onClick={handlePing}
        />
        <SubLogo />
      </div>
      <Carousel style={{ zIndex: 10 }} />
    </>
  );
}

export default Header;
