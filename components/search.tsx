import React, { Dispatch, useContext } from "react";
import { colorContext } from "../contexts/color";

export default function Search ({dispatch} : {dispatch : Dispatch <string>}) {

  const color = useContext (colorContext);
  return (
    <input
      style={{color:color}}
      onInput={(e : React.ChangeEvent <HTMLInputElement>) =>
        dispatch (e.currentTarget.value +'')}
      type="search" placeholder="Search characters"/>
  );
}