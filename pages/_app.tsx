import Head  from "next/head";
import React from "react";

import In    from "../components/In/In";
import Out   from "../components/Out/Out";

import "./global.css";

export default function App () {
  return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <In/>
    <Out/>
  </>
}