import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "../styles/styles.scss";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
