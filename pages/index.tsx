import Head from "next/head"
import React from "react"

import Search from "../components/Search"
import Clock from "../components/Clock"
import Button from "../components/Button"

export default function App () {
  return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <Clock inc={1}/>
    <Clock inc={0.66666}/>
    <Clock inc={0.33333}/>
    <Search/>
    <Button text="Whack a mole"/>
  </>
}