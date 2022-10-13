import { ReducerState, useState } from "react";
import Button from "./Button";
import Clock from "./Clock";
import { useReducer } from "react";

export default function ClockToggle () {
  const [state, dispatch] = useReducer (reducer, true);

  function reducer (state : boolean, action : string) {
    switch (action) {
      case 'on' : return true;
      case 'off': return false;
    }
    throw new Error (`Action ${action} is not defined`);
  }

  return <>
    <Button dispatch={dispatch} text="Hide clocks"/>
    {state && [2, 1, 0.666, 0.333].map ((v,i) => <Clock key={i} inc={v}/>)}
  </>
}