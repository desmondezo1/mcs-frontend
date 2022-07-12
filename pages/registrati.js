import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Error from "../components/Error";
import api from "../stores/StoreAPI";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("Firstname is required"),
  last_name: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  termsNconditions: Yup.boolean().oneOf(
    [true],
    "Accept terms and conditions to proceed"
  ),
});

const Register = () => {
  const [register] = api.useRegisterMutation();
  const router = useRouter();

  const activeUser = Cookies.get("user");
  useEffect(() => {
    if (activeUser) {
      toast.warning("el usuario ya esta conectado");
      router.push("/bacheca/" + JSON.parse(activeUser).id);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsNconditions: false,
      receiveNewLetter: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (
      values,
      { setErrors, setSubmitting, resetForm, setFieldTouched }
    ) => {
      try {
        await register({
          ...values,
          ...{
            address: "n/a",
            photo: "n/a",
            phone: 0,
            state: "n/a",
            city: "n/a",
            country: "n/a",
          },
        })
          .unwrap()
          .then((res) => {
            if (res.status.match(/20./)) {
              toast.success("Successfully Registereds", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              router.push("accedi-registrati");
            } else {
              toast.error(res.desc);
            }
          })
          .catch((err) => {
            console.log(err);
            setErrors({ afterSubmit: err?.message || "An error occured" });
          });
      } catch (error) {
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <div className="py-5 px-4">
      <div className="w-full md:w-[400px] md:ml-[100px]">
        <h2 className="border-b-[1px] w-fit border-gray-900 border-solid">
          REGISTRATI
        </h2>
        <FormikProvider value={formik}>
          <form className="mt-2" onSubmit={handleSubmit}>
            {errors.afterSubmit && <Error text={errors.afterSubmit} />}
            <input
              className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
              type={"text"}
              placeholder={`NOME*`}
              {...getFieldProps("first_name")}
            />
            {touched.first_name && <Error text={errors.first_name} />}
            <input
              className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
              type={"text"}
              placeholder={`COGNOME*`}
              {...getFieldProps("last_name")}
            />
            {touched.last_name && <Error text={errors.last_name} />}
            <input
              className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
              type={"email"}
              placeholder={`E-MAIL*`}
              {...getFieldProps("email")}
            />
            {touched.email && <Error text={errors.email} />}
            <input
              className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
              type={"password"}
              placeholder={`PASSWORD*`}
              {...getFieldProps("password")}
            />
            {touched.password && <Error text={errors.password} />}
            <input
              className="my-3 w-full border-b-gray-400 border-b-2 boder-b-solid bg-transparent pb-1 outline-none"
              type={"password"}
              placeholder={`CONFERMA PASSWORD*`}
              {...getFieldProps("confirmPasssword")}
            />
            {touched.confirmPassword && <Error text={errors.confirmPassword} />}
            <div className="check">
              <input
                className="cursor-pointer"
                type="checkbox"
                {...getFieldProps("termsNconditions")}
              />
              <span className="ml-2 text-sm">
                Ho letto e accetto il{" "}
                <a className="text-blue-500" href="#">
                  tratetamento dei dati personali.*
                </a>
              </span>
              {touched.termsNconditions && (
                <div>
                  <Error text={errors.termsNconditions} />
                </div>
              )}
            </div>
            <div className="check">
              <input className="cursor-pointer" type="checkbox" />
              <span className="ml-2 text-sm">Iscrivimi alla newsletter</span>
            </div>
            <button
              className="w-full login_button bg-black text-white my-3 text-sm text-center rounded-3xl py-[0.6em]"
              type="submit"
            >
              REGISTRATI
            </button>
            <div className="forgot_password login_button my-3 text-sm text-center rounded-3xl py-1 border-gray-600 border-2 boder-solid">
              <Link href="/accedi-registrati">
                <a>HAI GIA UN ACCOUNT? EFFETTUA IL LOGIN</a>
              </Link>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Register;
