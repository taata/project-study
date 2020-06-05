import React from "react";
import App from "next/app";

import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
