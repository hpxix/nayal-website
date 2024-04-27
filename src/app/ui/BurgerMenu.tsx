import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/app/ui/Button";
import LocalSwicther from "@/components/local-switcher";

function BurgerMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const closeOverlay = (event: any) => {
    if (event.target === event.currentTarget) {
      setIsChecked(false);
    }
  };
  const t = useTranslations("Head");

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        name="burger"
        checked={isChecked}
        onChange={toggleCheckbox}
        style={{ display: "none" }} // Hide checkbox as it's controlled programmatically
      />
      <label className="container" htmlFor="checkbox">
        <div className="burger-menu top"></div>
        <div className="burger-menu bottom"></div>
      </label>
      {isChecked && (
        <div className="menu-overlay gap-7" onClick={closeOverlay}>
          <LocalSwicther />
          <button className="text-white px-10 text-4xl custom-btn btn-16 rounded">
            {t("home")}
          </button>
          <button className="text-white px-10 text-4xl custom-btn btn-16 rounded">
            {t("about")}
          </button>
          <button className="text-white px-10 text-4xl custom-btn btn-16 rounded border-solid">
            {t("services")}
          </button>
          <Button className="text-white py-4 px-10 rounded">Contact us</Button>
        </div>
      )}
    </>
  );
}

export default BurgerMenu;
