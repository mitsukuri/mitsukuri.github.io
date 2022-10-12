import Head from "next/head";
import React from "react";
import ClockToggle from "../components/ClockToggle";

import Search from "../components/Search";

export default function App () {
  return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <ClockToggle/>
    <br/>
    <Search/>
  </>
}