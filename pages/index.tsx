import Head from "next/head";
import React, { useReducer } from "react";
import ClockToggle from "../components/ClockToggle";

import Search from "../components/Search";

function validateColor (c : string) {
  const d = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(c) ?  c : '#000';
  return d;
}

export default function App () {

  function colorReducer (color : string, action : string) {
    return `#${action}`;
  }
  const [colorChange, colorDispatch] = useReducer (colorReducer, '#f00');

  return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <ClockToggle color={validateColor (colorChange)}/>
    <br/>
    <Search dispatch={colorDispatch}/>
  </>
}