import React from "react";

// import Input from "../../atoms/Input";
import style from "../../../styles/molecule.module.css";
import Button from "../../atoms/Buttons";
import Checkbox from "../../atoms/Checkbox";
import { useState } from "react";
import { useFormik, Field,FormikProvider } from 'formik';


function LoginForm(props) {

  // let [email, setEmail] = useState('');
  // let [password, setPassword] = useState('');



  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: async values => {

        console.log({values});

        const resp = await fetch("/api/login",{
          method: "POST",
          body: JSON.stringify({values}),
          headers: {
            'content-Type': 'application/json'
          }
        })




        const data = await resp.json();
        console.log(resp);
        

      },
    });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps,handleChange } = formik;


  return (
    <div className={style.login_form}>
      <h4 className="underlined_text">ACCEDI</h4>
      <FormikProvider value={formik}>
      <form onSubmit={handleSubmit} >
        <input
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         value={values.email}
         placeholder="E-MAIL*" 
        />

        <input 
         id="password"
         name="password"
         type="password"
         onChange={handleChange}
         value={values.password}
         placeholder="PASSWORD*" />

        <Button
          style={{
            width: "100%",
            justifyContent: "center",
          }}

          type="submit"
        >
        LOG IN
      </Button>
      </form>
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
      </FormikProvider>
    </div>
  );
}

export default LoginForm;
