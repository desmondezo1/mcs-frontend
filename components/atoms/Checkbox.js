import React from "react";
import style from "../../styles/atoms.module.css";
function Checkbox({ id, label, ...props }) {
  return (
    <div className={style.checkbox_container}>
      <input id={id} type="checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
