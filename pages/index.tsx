import Head  from "next/head";
import React from "react";

import In    from "../components/In";
import Out   from "../components/Out";

import css   from "styled-jsx/css";

const globalStyle = css.global`
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    box-sizing: border-box;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  #__next {
    align-items: center;
    background: #282828;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default function App () {
  return <>
    <style jsx global>{globalStyle}</style>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <In/>
    <Out/>
  </>
}