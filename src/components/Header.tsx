"use client";
import React, { useState } from "react";
import SubLogo from "@/app/[locale]/header/SubLogo";
import NayalLogo from "@/app/images/nayal.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Carousel";
import Button from "@/app/ui/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Header() {
  const router = useRouter();
  // const t = useTranslations("Head");
  const [isPinging, setIsPinging] = useState(false);
  // console.log("object:", { home: t("Home") } as { home: string });
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
          <Link
            className="custom-btn btn-16 px-3 py-3 rounded text-white right-[600px]"
            href={"/"}
          >
            {/* {t("home")} */}
            Home
          </Link>
          <Link
            className="custom-btn btn-16 px-3 py-3 rounded text-white right-[500px]"
            // onClick={() => router.push("/about")}
            href={"/about"}
          >
            {/* {t("About")} */}
            About
          </Link>
          <Link
            className="custom-btn btn-16 px-3 py-3 rounded text-white right-[400px]"
            href={"/services"}
          >
            Services
          </Link>
        </div>
        <div className="flex">
          <Button
            className="px-3 py-3 rounded text-white left-[700px]"
            href={"/contact-us"}
          >
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
      <div className="relative z-10">
        {" "}
        {/* This container is relative and above Carousel */}
        <div
          className="flex flex-col items-center absolute w-full"
          style={{ top: "-48px" }} // Adjust if necessary
        >
          <Image
            style={{ position: "absolute", top: "-23px" }} // Adjust the top value as needed
            src={NayalLogo}
            alt="Element"
            width={200}
            height={200}
            className="z-30 bottom-3" // Logo is above the SubLogo (if needed) but below SubLogo's content
            onClick={handlePing}
          />
          {/* SubLogo with a higher z-index */}
          <div className="z-20 absolute top-12">
            <SubLogo />
          </div>
        </div>
        {/* Carousel with a lower z-index */}
        <Carousel className="z-0" />
      </div>{" "}
    </>
  );
}

export default Header;
