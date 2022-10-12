import Head from "next/head"
import React from "react"

import Search from "../components/search"

export default class extends React.Component {
  render () {
    return <>
    <Head>
      <title>Star Wars DB</title>
      <link rel="icon" href="/img/fav/r2d2.svg"/>
    </Head>
    <Search/>
    </>
  }
}