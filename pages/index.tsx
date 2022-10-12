import Head from "next/head"
import React from "react"

import Search from "../components/Search"
import Clock from "../components/Clock"
import Button from "../components/Button"

export default class App extends React.Component {
  render () {
    return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <Clock inc={1}/>
    <Clock inc={0.5}/>
    <Clock inc={0.25}/>
    <Search/>
    <Button text="wtf"/>
    </>
  }
}