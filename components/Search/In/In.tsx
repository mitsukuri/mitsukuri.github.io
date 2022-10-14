import { Dispatch, SetStateAction } from 'react';
import style from './In.module.css';

export default function In
({expanded, setExpanded} :
{
  expanded    : boolean,
  setExpanded : Dispatch <SetStateAction <boolean>>
})
{
  return <div className={style.root}>
    <div className={style.stack}>
      <input
      className={style.input}
        type="search" placeholder="May the force be with you"
      />
    </div>
  </div>;
}