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
    Name: {data.name} | Planet: {planet} | Year of birth: {data.birth_year} | Gender: {data.gender}
  </div>);
}