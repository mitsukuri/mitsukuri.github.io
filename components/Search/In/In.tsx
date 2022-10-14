import style from './In.module.css';

import { Dispatch, FormEvent, useContext } from 'react';
import { SearchAction } from '../Search';
import { searchStateCtx } from '../Search';


export default function In
({dispatch} : {dispatch : Dispatch <SearchAction>})
{
  function dispatchFocus () {dispatch ({type : 'input-focused'})}
  function dispatchInput (e : FormEvent <HTMLInputElement>) {
    dispatch ({type: 'input-changed', value : e.currentTarget.value})
  }

  const expanded = useContext (searchStateCtx).expanded;

  return <div className={[style.root, expanded && style.expanded].join (' ')}>
    <div className={style.chrome}>
      <input
        className={style.input}
        type="search"
        placeholder="May the force be with you"
        onFocus={dispatchFocus}
        onInput={dispatchInput}
      />
    </div>
  </div>;
}