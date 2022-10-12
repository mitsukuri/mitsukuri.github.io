import { useEffect, useState } from "react";

export default function Clock (p : {inc : number}) {
  const [date, setDate] = useState (new Date ());

  function clockUpdate () {setDate (new Date ())}

  useEffect (() => {
    const timer = setInterval (clockUpdate, p.inc * 1000);
    return (() => clearInterval (timer));
  });

  return <div suppressHydrationWarning>Current time is [{date.toISOString()}]</div>
}