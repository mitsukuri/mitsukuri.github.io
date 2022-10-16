import { useRouter } from "next/router";

import s from "./404.module.css";

export default function E404 () {

  const r = useRouter ();

  return (
  <div className={s.root} suppressHydrationWarning>
    <div className={s.box} suppressHydrationWarning>
      <div className={s.CDIV} suppressHydrationWarning>404</div>
      <div className={s.message} suppressHydrationWarning>
        Hrrrm!.. By <span className={s.url} suppressHydrationWarning>{r.asPath}</span> what you do mean?<br/><span className={s.smaller}>The undefined side of the force your path has led you to!</span>
      </div>
      <button className={s.button} onClick={() => r.back ()} suppressHydrationWarning>
        Back go and your side choose wisely!
      </button>
    </div>
  </div>)
}