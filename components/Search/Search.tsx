import { createContext, useEffect, useState } from "react";
import { SwapiPeople } from "../../interfaces/swapi-people";
import In from "./In/In";
import Out from "./Out/Out";

type SwapiPeopleResponse = {
  count    : number,
  next     : string,
  previous : string,
  results  : SwapiPeople []
}

export default function Search () {
  const inpuContext = createContext ('');
  const [expanded, setExpanded] = useState (true);
  const [data, setData] = useState <SwapiPeople[]>([]);

  useEffect (() => {
    (async () => {
      try {
        const res = await fetch ('https://swapi.dev/api/people/?search=darth');
        if (!res.ok) throw new Error (res.statusText);
        const json = await res.json () as SwapiPeopleResponse;
        console.info (json);
        if (!json.results) throw new Error ('Can\'t fetch data');
        setData (json.results);
      } catch (e) {throw e}
    })();
  });

  return <>
    <In expanded={expanded} setExpanded={setExpanded}/>
    <Out data={data}/>
  </>
}