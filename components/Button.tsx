import React from "react"

export default function Button ({text} : {text : string}) {
  return <button onMouseDown={whackAMole}>{text}</button>
}

function whackAMole () {alert ('Mole whacked OK!')};