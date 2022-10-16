import { useEffect, useState }   from 'react';

import { SwapiPeople }  from '../../../../interfaces/swapi-people';
import { SwapiPlanet }  from '../../../../interfaces/swapi-planet';
import { getSS, setSS } from '../../../../util/util';
import style            from './Entry.module.css';

export default function Entry ({data} : {data : Partial <SwapiPeople>}) {

  const [planet, setPlanet] = useState ('');

  useEffect (() => {

    if (!data.homeworld) return;

    const cached = getSS ('planet', data.homeworld);
    if (cached) {
      setPlanet (cached.name);
      return;
    }

    const URL = data.homeworld;
    const ac  = new AbortController ();

    (async () => {
      try {
        const res = await fetch (URL);

        if (!res.ok) throw new Error (res.statusText);

        const json = await res.json () as SwapiPlanet;
        console.info (json);

        if (!json.name) throw new Error ('Can\'t fetch data');
        setPlanet (json.name);

        data.homeworld && setSS ('planet', data.homeworld, json);
      }
      catch (e) {throw e}
    })();
    return () => ac?.abort ();
  },[data.homeworld]);

  return (
  <div className = {style.root}>
    <div className={style.name}>{data.name}</div>
    <div className={style.planet}>{planet}</div>
    <div className={style.year}>{data.birth_year}</div>
    <div className={style.gender}>{data.gender}</div>
  </div>);
}