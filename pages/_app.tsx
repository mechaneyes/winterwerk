import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "../styles/index.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
