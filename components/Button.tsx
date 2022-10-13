import React, { Dispatch, MouseEventHandler } from "react";

export default function Button
({text, dispatch} : {text : string, dispatch : Dispatch <string>}) {
  return <
    button
    onMouseDown={() => dispatch ('off')}
    onMouseUp={() => dispatch ('on')}>
      {text}
    </button>
}