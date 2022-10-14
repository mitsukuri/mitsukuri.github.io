import style              from "./Out.module.css";

import { Dispatch, useContext }       from "react";

import { SwapiPeople }    from "../../../interfaces/swapi-people";
import { SearchAction }   from '../Search';
import { searchStateCtx } from '../Search';

export default function Out ({dispatch} : {dispatch : Dispatch <SearchAction>}) {
  const data = useContext (searchStateCtx).data;

  const list = data
    ? <li>{data.map ((d,i) => <ul key={i}>{d.name}</ul>)}</li>
    : null;

  return <div className={style.root}>
    <div className={style.out}>
      {list}
    </div>
  </div>
}