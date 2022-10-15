import { Dispatch, useContext }    from "react";

import style                       from "./Out.module.css";
import { SearchAction, StateCtx }  from '../Search';
import Entry                       from "./Entry/Entry";

export default function Out ({dispatch} : {dispatch : Dispatch <SearchAction>}) {
  const ctx = useContext (StateCtx);

  function renderContent () {
    return <>
      {ctx.data
          .sort ((a,b) => a.name > b.name ? 1 : (a.name < b.name) ? - 1 : 0)
          .map ((d,i) => <Entry key = {i} data = {d}/>)}
    </>;
  }
  return (
  <div className = {style.root}>
    <div className = {style.out}>
      {renderContent ()}
    </div>
  </div>);
}