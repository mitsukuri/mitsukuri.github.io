import style from './Heading.module.css';

export default function Heading () {
  return <div className = {style.root}>
    <div className={style.name}>Name</div>
    <div className={style.planet}>Planet</div>
    <div className={style.year}>Born</div>
    <div className={style.gender}>Gender</div>
  </div>
}