import React from "react";

import "../css/base.css";
import "../css/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
