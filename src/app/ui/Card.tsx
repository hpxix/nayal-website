import React from "react";
import useLangDirection from "@/app/Hooks/useLangDirection";
import useViewport from "@/app/Hooks/useViewPort";
import { useTranslations } from "next-intl";

function Card() {
  // const { breakpoint: bp } = useViewport();
  // const { rtl } = useLangDirection();
  // const t = useTranslations();

  return (
    <>
      <div className="py-24 bg-black text-2xl">{"home"}</div>
    </>
  );
}

export default Card;
