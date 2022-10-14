import style from "./Out.module.css";

export default function Out ({data}) {
  return <div className={style.root}>
    <div className={style.out}>
      {data}
    </div>
  </div>
}