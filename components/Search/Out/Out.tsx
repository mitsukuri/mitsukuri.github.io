import { SwapiPeople } from "../../../interfaces/swapi-people";
import style from "./Out.module.css";

export default function Out ({data} : {data : SwapiPeople []}) {
  return <div className={style.root}>
    <div className={style.out}>
      {data [0]? data[0].name : 'no data'}
    </div>
  </div>
}