import style              from "./Out.module.css";

import { Dispatch, useContext, useEffect, useState }       from "react";

import { SwapiPeople }    from "../../../interfaces/swapi-people";
import { SearchAction, SearchCtx }   from '../Search';

export default function Out ({dispatch} : {dispatch : Dispatch <SearchAction>}) {
  const ctx = useContext (SearchCtx);

  function renderContent () {
    return ctx.data
      ? <li>
        {ctx.data.map ((d,i) => <ul key={i}>{d.name}</ul>)}
        </li>
      : <></>
  }

  return <div className={style.root}>
    <div className={style.out}>
      {renderContent ()}
    </div>
  </div>
}