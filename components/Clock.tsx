import { useContext, useEffect, useState } from "react";
import { colorContext } from "../contexts/color";

export default function Clock ({inc, enabled = true} : {inc : number, enabled? : true}) {
  const [date, setDate] = useState (new Date ());
  const color = useContext (colorContext);

  function clockUpdate () {setDate (new Date ())}

  useEffect (() => {
    const timer = setInterval (clockUpdate, inc * 1000);
    return (() => clearInterval (timer));
  });

  return enabled && <div suppressHydrationWarning style={{color : color}}>
    {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}.{date.getMilliseconds()}
    </div>
}