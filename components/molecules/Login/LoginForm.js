import React from "react";

import Input from "../../atoms/Input";
import style from "../../../styles/molecule.module.css";
import Button from "../../atoms/Buttons";
import Checkbox from "../../atoms/Checkbox";

function LoginForm(props) {
  return (
    <div className={style.login_form}>
      <h4 className="underlined_text">ACCEDI</h4>

      <Input placeholder="E-MAIL*" />
      <Input placeholder="PASSWORD*" />
      <Button
        style={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        LOG IN
      </Button>
      <Button
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        color="secondary"
      >
        PASSWORD DIMENTICATA?
      </Button>
      <Checkbox id={"ricordami"} label="Ricordami" />
    </div>
  );
}

export default LoginForm;
