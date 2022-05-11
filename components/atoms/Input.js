import React from "react";

import style from "../../styles/atoms.module.css";
function Input(props) {
  return <input {...props} className={style.text_input} />;
}

export default Input;
