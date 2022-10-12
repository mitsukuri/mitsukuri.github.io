import { useEffect, useState } from "react";

export default function Clock ({inc, enabled = true} : {inc : number, enabled? : true}) {
  const [date, setDate] = useState (new Date ());

  function clockUpdate () {setDate (new Date ())}

  useEffect (() => {
    const timer = setInterval (clockUpdate, inc * 1000);
    return (() => clearInterval (timer));
  });

  return enabled && <div suppressHydrationWarning>
    {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}.{date.getMilliseconds()}
    </div>
}