"use client";
import React from "react";
import useLangDirection from "@/app/Hooks/useLangDirection";
import useViewport from "@/app/Hooks/useViewPort";
import { useTranslations } from "next-intl";

function Card({ children }: any) {
  const { breakpoint: bp } = useViewport();
  // const { rtl } = useLangDirection();
  // const t = useTranslations();

  return (
    <>
      <div className={children}>
        <div className="">{"lmfao what?"}</div>
      </div>
    </>
  );
}

export default Card;
