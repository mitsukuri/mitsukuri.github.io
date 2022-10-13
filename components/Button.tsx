import React, { Dispatch, MouseEventHandler, useContext } from "react";

import { colorContext } from "../contexts/color";

export default function Button
({text, dispatch} : {text : string, dispatch : Dispatch <string>}) {

  const color = useContext (colorContext);

  return <
    button
    style={{color : color}}
    onMouseDown={() => dispatch ('off')}
    onMouseUp={() => dispatch ('on')}>
      {text}
    </button>
}