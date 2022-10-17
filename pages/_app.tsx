import "./index.css";

import { AppProps }   from "next/app";
import { StateCtx }   from "../components/Search";
import { useContext } from "react";

export default function MyApp ({Component, pageProps} : AppProps) {
  const state = useContext (StateCtx);

  return <StateCtx.Provider value={state}>
    <Component {...pageProps}/>
  </StateCtx.Provider>
}