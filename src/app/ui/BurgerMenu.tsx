import React from "react";

function BurgerMenu() {
  return (
    <>
      <input type="checkbox" id="checkbox" name="burger" />
      <label className="container" htmlFor="checkbox">
        <div className="burger-menue top"></div>
        <div className="burger-menue bottom"></div>
      </label>
    </>
  );
}

export default BurgerMenu;
