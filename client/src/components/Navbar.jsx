import React, { useState } from "react";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

export default function Navbar() {
  const [switchMenu, setSwitchMenu] = useState(false);
  const handlerMenu = () => setSwitchMenu((prev) => !prev);
  return (
    <header className="w-full fixed top-0 left-0 bg-[#121F3D] ">
      <img
        src="../../public/svg.png"
        width={30}
        height={30}
        alt="menu"
        onClick={handlerMenu}
        className="md:hidden"
      />
      <MenuMobile switchMenu={switchMenu} />
      <MenuDesktop />
    </header>
  );
}
