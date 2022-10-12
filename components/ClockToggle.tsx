import { useState } from "react";
import Button from "./Button";
import Clock from "./Clock";

export default function ClockToggle () {
  const [state, updateState] = useState (true);

  function toggle () {
    updateState (!state);
  }

  return <>
    {state && [2, 1, 0.666, 0.333].map ((v,i) => <Clock key={i} inc={v}/>)}
    <Button handler={toggle} text="Toggle clocks"/>
  </>
}