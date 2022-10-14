import "./_app.css";

import Head  from "next/head";
import React from "react";

import Search from "../components/Search/Search";

export default function App () {
  return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <Search/>
  </>
}