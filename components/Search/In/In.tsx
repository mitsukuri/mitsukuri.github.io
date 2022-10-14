import style from './In.module.css';

import { Dispatch, FormEvent, PropsWithChildren, useCallback, useContext } from 'react';
import { SearchAction } from '../Search';
import { searchStateCtx } from '../Search';

type InEvt = FormEvent <HTMLInputElement>;

export default function In
({dispatch} : {dispatch : Dispatch <SearchAction>})
{
  function dispatchFocus () {dispatch ({type : 'input.focus'})}

  function dispatchInput (e : InEvt) {
    dispatch ({type: 'input.input', value : e.currentTarget.value})
  }

  const expanded = useContext (searchStateCtx).expanded;

  return <div className={[style.root, expanded && style.expanded].join (' ')}>
    <div className={style.chrome}>
      <input
        className={style.input}
        type="text"
        placeholder="May the force be with you"
        onFocus={dispatchFocus}
        onInput={dispatchInput}
        onKeyDown={e => {if (e.key === 'Enter') dispatch ({
          type: 'input.change'})}}
      />
    </div>
  </div>;
}