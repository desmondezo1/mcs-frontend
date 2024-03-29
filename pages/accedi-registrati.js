import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Error from "../components/Error";
import api from "../stores/StoreAPI";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import useStore from "../stores/zustandStore";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoginModule from "../styles/login.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const activeUser = Cookies.get("user");
  const isLoggedIn = useSelector((state) => state.loggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      toast.warning("el usuario ya esta conectado");
      router.push("/bacheca/" + JSON.parse(activeUser).id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUser]);
  const setLoginState = useStore((state) => state.setLoggedInState);
  const setUserId = useStore((state) => state.setUserId);
  const [login] = api.useLoginMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (
      values,
      { setErrors, setSubmitting, resetForm, setFieldTouched }
    ) => {
      try {
        await login(values)
          .unwrap()
          .then((res) => {
            if (res.status && res.status.match(/40./)) {
              return toast.error(res.desc);
            }
            localStorage.setItem(
              process.env.NEXT_PUBLIC_STORAGE_KEY,
              JSON.stringify(res)
            );

            Cookies.set("token", res.access_token);
            Cookies.set("user", JSON.stringify(res?.user));
            setLoginState(true);
            setUserId(res?.user?.id);
            toast.success("login effettuato con successo");
            router.push(`bacheca/${res?.user?.id}`);
          })
          .catch((err) => {
            console.log(err);
            setErrors({
              afterSubmit: err?.data?.message || "An error occured",
            });
          });
      } catch (error) {
        resetForm({ values: { email: "", password: "" } });
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <div className="py-[3em]">
      <div
        className={`flex items-center justify-between flex-wrap  px-4 mx-auto w-[98%] md:w-[95%] lg:w-4/5 ${LoginModule.container}`}
      >
        <div
          className={`w-1/2 p-[3em] lg:border-r-gray-500 lg:border-r lg:boder-r-solid ${LoginModule.mainFormContainer}`}
        >
          <div className="inner w-[280px] lg:w-[350px]">
            <h2 className="border-b-[2px] w-fit border-gray-700 border-solid">
              ACCEDI
            </h2>
            <FormikProvider value={formik}>
              <form className="mt-2" onSubmit={handleSubmit}>
                {errors.afterSubmit && <Error text={errors.afterSubmit} />}
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
                <button
                  className="login_button bg-black text-white my-3 text-sm text-center rounded-3xl py-[0.6em] w-full"
                  disabled={isSubmitting}
                  type="submit"
                >
                  LOG IN
                </button>
                <div className="forgot_password login_button my-3 text-sm text-center rounded-3xl py-1 border-gray-600 border-2 boder-solid">
                  <Link href="/forgot">
                    <a>PASSWORD DIMENTICATA?</a>
                  </Link>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <span className="ml-2">Ricordami</span>
                </div>
              </form>
            </FormikProvider>
          </div>
        </div>
        <div>
          <div className="inner w-[280px] lg:w-[350px]">
            <h2 className="my-3 text-center"> NON HAI UN ACCOUNT? </h2>
            <div className=" my-4 text-center">
              <Link href="/registrati">
                <a className="border-gray-600 flex items-center justify-between border-2 boder-solid rounded-3xl py-1 px-3 w-fit m-auto">
                  <span> REGISTRATI </span>
                  <span className="ml-1">
                    <Icon
                      icon="carbon:arrow-right"
                      style={{ fontSize: "1.2rem" }}
                    />
                  </span>
                </a>
              </Link>
            </div>
            <p className="text-sm text-gray-400 text-center my-2">
              Registrando un account con nol, sarai in grandi di visualizzare lo
              storico dei tuoi ordini e accedere ai prezzi esclusivi per
              determinate categorie. Le informazioni richeste sono necessarie a
              render il processo d'aquisto piu semplice e rapido
            </p>
            <p className="text-sm text-gray-400 text-center my-2">
              Bastano solo un paio di minuti per risparmiame molti di piu!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
