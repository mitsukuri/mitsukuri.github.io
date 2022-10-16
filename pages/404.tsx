import { useRouter } from "next/router";

import s from "./404.module.css";

export default function E404 () {

  const r = useRouter ();

  return (
  <div className={s.root} suppressHydrationWarning>
    <div className={s.box}>
      <div className={s.CDIV}>404</div>
      <div className={s.message}>
        Hrrrm!.. by <span className={s.url}>{r.asPath}</span> what you do mean?<br/><span className={s.smaller}>The undefined side of the force your path has led you to!</span>
      </div>
      <button className={s.button} onClick={() => r.back ()}>
        Back you go and your side choose wisely!
      </button>
    </div>
  </div>)
}