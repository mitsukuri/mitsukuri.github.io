import Link from 'next/link';
import { useEffect, useState }   from 'react';

import { SwapiPeople }  from '../interfaces/swapi-people';
import { SwapiPlanet }  from '../interfaces/swapi-planet';
import { getSS, setSS } from '../util/util';
import style            from './Entry.module.css';

function u (s? : string) {return (!s || s === 'unknown') ? '?' : s}
function y (s? : string) {
  if (!s || s == 'unknown') return <>?</>;
  const m = s.match(/([\d|\.]*)(.*)/)
  if (!m) return <>?</>;
  return <>
    {m[1]}<span className={style.epoch}>{m[2]}</span>
  </>
}

export default function Entry ({data} : {data : Partial <SwapiPeople> & {id:number}}) {

  const [born, setBorn]       = useState (<></>);
  const [gender, setGender]   = useState ('');
  const [planet, setPlanet]   = useState ('');
  const [fetched, setFetched] = useState (false);

  useEffect (() => {

    if (!data.homeworld) return;

    const cached = getSS ('planet', data.homeworld);
    if (cached) {
      setPlanet (u (cached.name));
      setFetched (true);
      return;
    }

    const URL = data.homeworld;
    const ac  = new AbortController ();

    (async () => {
      try {
        const res = await fetch (URL, {mode: 'cors'});

        if (!res.ok) throw new Error (res.statusText);

        const json = await res.json () as SwapiPlanet;

        if (!json.name) throw new Error ('Can\'t fetch data');
        setPlanet (u (json.name));
        setFetched (true);

        data.homeworld && setSS ('planet', data.homeworld, json);
      }
      catch (e) {throw e}
    })();
    return () => ac?.abort ();
  },[data.homeworld]);

  useEffect (() => {
    setBorn (y (data.birth_year));
  },[data.birth_year]);

  useEffect (() => {
    setGender (u (data.gender))
  },[data.gender]);

return (
  <Link
    href={{
      pathname : `/characters/${data.name?.replaceAll(' ','_')}`,
      query : {x: data.id.toString ()}
    }}
    shallow={true}>
    <div
      className = {[style.root, fetched && style.fetched].join (' ')}>
      <div className={style.name}>{data.name}</div>
      <div className={style.planet}>{planet}</div>
      <div className={style.year}>{born}</div>
      <div className={style.gender}>{gender}</div>
    </div>
  </Link>);
}