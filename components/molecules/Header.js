import React from "react";

import Image from "next/image";

import Logo from "../../images/Logo.png";
function Header({ children }) {
  return (
    <div className="d-flex flex-column  w-100">
      <nav className="d-flex w-100 flex-row justify-content-between p-3">
        <Image src={Logo} alt="logo" />

        {children}
      </nav>
    </div>
  );
}

export default Header;
