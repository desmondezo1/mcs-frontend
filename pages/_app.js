import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script"
import {Provider} from "react-redux";
import store from "../stores";
import '../styles/globals.css'
import Header from "../components/layout/header";
import MepaHeader from "../components/layout/mepaHeader";
import Footer from "../components/layout/footer"
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crosOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet"/>
        <title>MCS</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/metaAssets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/metaAssets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/metaAssets/favicon-16x16.png" />
        <link rel="manifest" href="/images/metaAssets/site.webmanifest" />
        <meta name="description" content="MCS Official Website" />
        <link rel="icon" href="/images/metaAssets/favicon.ico" />
    </Head>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous" 
      />
      <Provider store={store}>
        {router.asPath == "/mepa" ? (<MepaHeader/>) :(<Header />)}
      <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  
  )
}

export default MyApp;
