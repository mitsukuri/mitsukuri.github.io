import style from './In.module.css';

export default function In () {
  return <div className={style.root}>
    <input
    className={style.input}
      type="search" placeholder="Find them across the whole galaxy!"
    />
  </div>;
}