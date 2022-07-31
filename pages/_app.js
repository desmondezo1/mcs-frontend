import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "react-redux";
import store, { useSelector } from "../stores";
import "../styles/globals.css";
import Header from "../components/layout/header";
import MepaHeader from "../components/layout/mepaHeader";
import Footer from "../components/layout/footer";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";

function RouterChecker() {
  const arr = [
    "/",
    "/shop/",
    "/shop/product/[id]",
    "/shop/cart",
    "/cart",
    "/brands",
    "/terms and condition",
    "/accedi-registrati",
    "/mepa",
    "/partners",
    "/private/policy",
    "/registrati",
    "/success",
    "/category/[name]",
  ];

  const router = useRouter();

  const currentRoute = router.pathname;

  const isLoggedIn = useSelector((state) => state.loggedIn);
  if (!arr.includes(currentRoute)) {
    if (!isLoggedIn) {
      // router.push("/accedi-registrati");
      toast.warning("Not Logged in");
    }
  } else {
  }
  return <></>;
}
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crosOrigin="anonymous"
        />
        <title>MCS</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Provider store={store}>
        {router.asPath == "/mepa" ? <MepaHeader /> : <Header />}
        <RouterChecker />
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
      <Footer />
    </>
  );
}

export default MyApp;
