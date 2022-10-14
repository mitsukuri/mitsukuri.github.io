import { useState } from "react";
import In from "./In/In";
import Out from "./Out/Out";

export default function Search () {
  const [expanded, setExpanded] = useState (true);

  return <>
    <In expanded={expanded} setExpanded={setExpanded}/>
    <Out/>
  </>
}