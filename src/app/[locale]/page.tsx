import Image from "next/image";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import Carousel from "../../components/Carousel";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("Head");
  return (
    <>
      <div>
        <p className="bg-red text-black py-3">{t("about")}</p>
        <p className="bg-red text-black py-3">{t("home")}</p>
      </div>
    </>
  );
}
