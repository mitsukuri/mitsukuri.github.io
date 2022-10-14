import { createContext,
         useEffect,
         useState }    from "react";
import { SwapiPeople } from "../../interfaces/swapi-people";
import In              from "./In/In";
import Out             from "./Out/Out";


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
  const [result, setResult] = useState (false);
  const [input, setInput] = useState ('');

/*   // NEVER fetch outside of useEffect !
  useEffect (() => {
    const ac = new AbortController ();
    (async () => {
      try {
        const res = await fetch ('https://swapi.dev/api/people/?search=sky');
        if (!res.ok) throw new Error (res.statusText);
        const json = await res.json () as SwapiPeopleResponse;
        console.info (json);
        if (!json.results) throw new Error ('Can\'t fetch data');
        setData (json.results);
      } catch (e) {throw e}
    })();
    return () => ac?.abort ();
  },[]); // <== NEVER forget the [], otherwise fetch loops infinitely */

  return <>
    <In expanded={expanded} setExpanded={setExpanded}/>
    {!expanded && <Out data={data}/>}
  </>
}