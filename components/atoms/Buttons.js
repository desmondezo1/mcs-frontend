import React from "react";

import style from "../../styles/atoms.module.css";

function Buttons({ onClick, children, color, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${
        color === "secondary" ? style.secondary : style.primary
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Buttons;
