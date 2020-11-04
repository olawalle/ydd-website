/** @format */

import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./styles/bootstrap5152.css";
import "./styles/styles.scss";
import "./styles/colors.css";
import "./styles/fonts.css";
import "./styles/index.scss";
import SnackbarProvider from "react-simple-snackbar";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider>
        <Head>
          <script src='https://connect.soundcloud.com/sdk/sdk-3.3.2.js'></script>
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&display=swap'
            rel='stylesheet'
            key='google-font-cabin'
          />
          <link
            async
            rel='stylesheet'
            href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
          />
        </Head>
        <Component {...pageProps} />
        <style global jsx>{`
          body {
            font-family: "Source Sans Pro", sans-serif;
            font-weight: 400;
          }
          .f-left {
            float: left;
          }
          .f-right {
            float: right;
          }
        `}</style>
      </SnackbarProvider>
    </>
  );
}
