import { colorContext } from "../contexts/color";
import { useContext }   from "react";
import { useReducer }   from "react";
import Button           from "./Button";
import Clock            from "./Clock";

export default function ClockToggle ({color} : {color : string}) {
  const [state, dispatch] = useReducer (reducer, true);

  function reducer (state : boolean, action : string) {
    switch (action) {
      case 'on' : return true;
      case 'off': return false;
    }
    throw new Error (`Action ${action} is not defined`);
  }

  return (
    <colorContext.Provider value={color}>
    <Button dispatch={dispatch} text="Hide clocks"/>
    {state && [2, 1, 0.666, 0.333].map ((v,i) => <Clock key={i} inc={v}/>)}
    </colorContext.Provider>);
}