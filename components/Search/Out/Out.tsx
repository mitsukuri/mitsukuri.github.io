import { useContext } from "react";

import { StateCtx } from '../Search';
import style        from "./Out.module.css";
import Entry        from "./Entry/Entry";
import Heading      from "./Heading/Heading";

export default function Out () {

  const state = useContext (StateCtx);

  function renderContent () {
    return <>
      {state.data
          .sort ((a,b) => a.name > b.name ? 1 : (a.name < b.name) ? - 1 : 0)
          .map  ((d,i) => <Entry key = {i} data = {d}/>)}
    </>;
  }
  return (
  <div className = {style.root}>
    <Heading/>
    {renderContent ()}
  </div>);
}