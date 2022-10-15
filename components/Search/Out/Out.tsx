import { Dispatch, useContext }    from "react";

import style                       from "./Out.module.css";
import { SearchAction, SearchCtx } from '../Search';
import Entry from "./Entry/Entry";
import { SwapiPeople } from "../../../interfaces/swapi-people";

export default function Out ({dispatch} : {dispatch : Dispatch <SearchAction>}) {
  const ctx = useContext (SearchCtx);

  function renderContent () {
    return (
    /*<li>
      {ctx.data.map ((d,i) => <ul key={i}>{d.name}</ul>)}
    </li>)}*/
    <>
      {ctx.data
          .sort ((a,b) => a.name > b.name ? 1 : (a.name < b.name) ? - 1 : 0)
          .map ((d,i) => <Entry key={i} data={d}/>)}
    </>
    );
  }
  return <div className={style.root}>
    <div className={style.out}>
      {renderContent ()}
    </div>
  </div>
}