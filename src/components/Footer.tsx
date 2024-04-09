"use client";
import React from "react";
import Image from "next/image";
import Button from "../app/ui/Button";
import NayalLogo from "@/app/images/nayal.png";

export const Footer = ({ className }: any) => {
  return (
    <div className="footer bg-black text-white py-12 px-6 inset-x-0 bottom-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Image
          src={NayalLogo}
          alt="Element"
          width={200}
          height={100}
          className="mt-0 mx-auto"
        />
        <div className="md:col-span-3 lg:col-span-2">
          <div className="mt-8">
            <p>Have a project in mind? Click below to request a</p>
            <p className="font-bold">
              free virtual or in-home consultation with our team!
            </p>
          </div>
          <Button className="px-40 py-3 rounded">Contact Us</Button>
        </div>
        <div>
          <p className="font-bold">T:</p>
          <p className="mt-2">+1 (718) 439-1222</p>
          <div>
            <p className="font-bold">Address:</p>
            <p className="mt-2">
              555 Madison Ave <br />
              New York, NY 10022
            </p>
            <div>
              <p className="font-bold">NAVIGATE</p>
              <p className="mt-2">
                HOME <br />
                ABOUT US <br />
                PORTFOLIO <br />
                SERVICES <br />
                PROCESS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p>©2012-2021 United Elite Group Inc</p>
      </div>
    </div>
  );
};
