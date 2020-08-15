/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./styles/bootstrap5152.css";
import "./styles/styles.scss";
import "./styles/colors.css";
import SnackbarProvider from "react-simple-snackbar";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider>
        <Head>
          <script src="/js/test.js"></script>
        </Head>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}
