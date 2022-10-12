import React, { MouseEventHandler } from "react";

export default function Button
({text, handler} : {text : string, handler : MouseEventHandler}) {
  return <button onClick={handler}>{text}</button>
}