"use client";
import React, { useState } from "react";
import SubLogo from "@/app/[locale]/header/SubLogo";
import NayalLogo from "@/app/images/nayal.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Carousel";
import Button from "@/app/ui/Button";
import { useTranslations } from "next-intl";
import LocalSwicther from "@/components/local-switcher";
import BurgerMenu from "@/app/ui/BurgerMenu";
import useViewPort from "@/app/Hooks/useViewPort";

function Header() {
  const router = useRouter();
  const t = useTranslations("Head");
  const [isPinging, setIsPinging] = useState(false);
  const { breakpoint } = useViewPort(); // Destructure breakpoint from the hook
  console.log("breakpoint:", breakpoint);
  const handlePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      router.push("/");
      setIsPinging(false);
    }, 400);
  };
  return (
    <>
      <div className="bg-black p-6 flex justify-between items-center">
        {breakpoint === "sm" && <BurgerMenu />}{" "}
        {/* Render BurgerMenu for small screens */}
        {/* Right-aligned buttons */}
        {breakpoint !== "sm" && ( // Conditionally render right-aligned buttons if not on small screens
          <div className="flex items-center space-x-4 md:space-x-24 lg:space-x-32 xl:space-x-40 ml-28">
            <button className="text-white px-2 custom-btn btn-16 rounded">
              Home
            </button>
            <button className="text-white px-2 custom-btn btn-16 rounded">
              About
            </button>
            <button className="text-white px-2 custom-btn btn-16 rounded">
              Services
            </button>
          </div>
        )}
        {/* Spacer */}
        <div className="flex-grow"></div>
        {/* Left-aligned buttons and Contact button */}
        {breakpoint !== "sm" && ( // Conditionally render left-aligned buttons and Contact button if not on small screens
          <div className="flex items-center space-x-12 md:space-x-24 lg:space-x-32 xl:space-x-40">
            <button className="text-white px-2 custom-btn btn-16 rounded">
              Button 1
            </button>
            <button className="text-white px-2 custom-btn btn-16 rounded">
              Button 2
            </button>
            <Button className="text-white px-2 rounded">Contact us</Button>
          </div>
        )}
        {/* LocalSwitcher - positioned to the far right */}
        <div className="flex items-center ml-5">
          <LocalSwicther className="text-white space-x-20" />
        </div>
      </div>
      <div className="relative z-10">
        <div
          className="flex flex-col items-center absolute w-full"
          style={{ top: "-48px" }}
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
