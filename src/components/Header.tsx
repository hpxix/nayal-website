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
import { useUI } from "@/app/ui/Context";
import useLangDirection from "@/app/Hooks/use-language-direction";
import { useSearchParams } from "next/navigation";

function Header() {
  const router = useRouter();
  const { rtl, ltr } = useLangDirection();
  console.log("rtl:", rtl);

  const t = useTranslations("Head");
  const [isPinging, setIsPinging] = useState(false);
  const { breakpoint } = useViewPort();
  console.log("breakpoint:", breakpoint);
  const { openModal } = useUI();
  const handlePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      router.push("/");
      setIsPinging(false);
    }, 400);
  };

  return (
    <>
      <div
        className={`bg-gradient-to-t from-black  p-6 flex justify-between items-center ${
          rtl ? "text-right" : "text-left"
        }`}
      >
        {breakpoint === "sm" && <BurgerMenu />}{" "}
        {/* Render BurgerMenu for small screens */}
        {/* Logo and Right-aligned buttons */}
        <div className="flex items-center">
          {/* Logo */}
          {/* Right-aligned buttons */}
          {breakpoint === "sm" && (
            <div className="absolute top-0 right-0 mr-3 mt-2">
              <Image
                src={NayalLogo}
                alt="Nayal Logo"
                width={100}
                height={100}
                onClick={handlePing}
              />
            </div>
          )}
          {breakpoint !== "sm" && (
            // Conditionally render right-aligned buttons if not on small screens
            <div className="flex items-center space-x-4 md:space-x-24 lg:space-x-32 xl:space-x-40">
              {rtl ? (
                <>
                  <Button className="text-white px-2 rounded">
                    Contact us
                  </Button>
                  <button className="text-white px-2 custom-btn btn-16 rounded border-4 border-blue-600">
                    Button 1
                  </button>
                  <button className="text-white px-2 custom-btn btn-16 rounded">
                    Button 2
                  </button>
                </>
              ) : (
                <>
                  <button className="text-white px-2 custom-btn btn-16 rounded">
                    {t("home")}
                  </button>
                  <button className="text-white px-2 custom-btn btn-16 rounded">
                    {t("about")}
                  </button>
                  <button
                    className="text-white px-2 custom-btn btn-16 rounded"
                    style={{ paddingTop: "6px" }}
                  >
                    {t("services")}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        {/* Spacer */}
        <div className="flex-grow"></div>
        {/* Left-aligned buttons and Contact button */}
        {breakpoint !== "sm" && (
          // Conditionally render left-aligned buttons and Contact button if not on small screens
          <div className="flex items-center space-x-12 md:space-x-24 lg:space-x-32 xl:space-x-40">
            {rtl ? (
              <>
                <button className="text-white px-2 custom-btn btn-16 rounded">
                  {t("about")}
                </button>
                <button className="text-white px-2 custom-btn btn-16 rounded" style={{ paddingTop: '5px' }}>
                  {t("services")}
                </button>
                <button className="text-white px-2 custom-btn btn-16 rounded">
                  {t("home")}
                </button>
              </>
            ) : (
              <>
                <button className="text-white px-2 custom-btn btn-16 rounded">
                  Button 1
                </button>
                <button className="text-white px-2 custom-btn btn-16 rounded">
                  Button 2
                </button>
                <Button className="text-white px-2 rounded">Contact us</Button>
              </>
            )}
          </div>
        )}
        {/* LocalSwitcher - positioned to the far right */}
        {breakpoint !== "sm" && (
          <div className="flex items-center ml-10">
            <LocalSwicther className="text-white space-x-20" />
          </div>
        )}
      </div>
      {/* SubLogo with a higher z-index */}
      <div className="relative z-10">
        {breakpoint !== "sm" && (
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
            {/* <div className="z-20 absolute md:top-12 top-10">
              <SubLogo />
            </div> */}
          </div>
        )}
        {/* Carousel with a lower z-index */}
        <Carousel className="z-0" />
      </div>{" "}
    </>
  );
}

export default Header;
