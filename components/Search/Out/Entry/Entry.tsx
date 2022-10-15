/*
states: mini | full
when going to full, routing must update accordingly as if we were visiting
a dedicated page, and then back to /search
*/
import { useEffect, useState }   from 'react';

import { SwapiPeople } from '../../../../interfaces/swapi-people';
import { SwapiPlanet } from '../../../../interfaces/swapi-planet';
import style           from './Entry.module.css';

export default function Entry ({data} : {data : Partial <SwapiPeople>}) {

  const [planet, setPlanet] = useState ('');

  useEffect (() => {

    if (!data.homeworld) return;
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
      }
      catch (e) {throw e}
    })();
    return () => ac?.abort ();
  },[data.homeworld]);

  return (
  <div className = {style.root}>
    {data.name} | {planet} | {data.birth_year} | {data.gender}
  </div>);
}