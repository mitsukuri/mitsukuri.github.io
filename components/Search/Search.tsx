import { createContext, useEffect, useState } from "react";
import In from "./In/In";
import Out from "./Out/Out";

export default function Search () {
  const inpuContext = createContext ('');
  const [expanded, setExpanded] = useState (true);
  const [data, setData] = useState ('');

  // useEffect (() => {
  //   (async () => {
  //      const data = await fetch ('https://swapi.dev/api/people/?search=darth');
  //      const json = await data.text ();
  //      setData (json.toString ());
  //   })();
  // });

  return <>
    <In expanded={expanded} setExpanded={setExpanded}/>
    <Out data={data}/>
  </>
}