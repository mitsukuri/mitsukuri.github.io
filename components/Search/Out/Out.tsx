import { SwapiPeople } from "../../../interfaces/swapi-people";
import style from "./Out.module.css";

export default function Out ({data} : {data : SwapiPeople []}) {
  const list = data
    ? <li>{data.map ((d,i) => <ul key={i}>{d.name}</ul>)}</li>
    : null;

  return <div className={style.root}>
    <div className={style.out}>
      {list}
    </div>
  </div>
}