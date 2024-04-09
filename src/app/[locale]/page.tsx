"use client";
import { useTranslations } from "next-intl";
import BurgerMenu from '@/app/ui/BurgerMenu'

export default function Home() {
  const t = useTranslations("Head");
  return (
    <>
      <div>
        <BurgerMenu/>
      </div>
    </>
  );
}
