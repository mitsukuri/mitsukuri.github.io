import style from './In.module.css';

import { Dispatch, useContext } from 'react';
import { SearchAction } from '../Search';
import { searchStateCtx } from '../Search';

export default function In
({dispatch} : {dispatch : Dispatch <SearchAction>})
{
  const expanded = useContext (searchStateCtx).expanded;

  return <div className={[style.root, expanded && style.expanded].join (' ')}>
    <div className={style.chrome}>
      <input
        className={style.input}
        type="search"
        placeholder="May the force be with you"
        onFocus={() => dispatch ({type : 'input-focused'})}
        onInput={e => dispatch ({type: 'input-changed', value : e.currentTarget.value})}
      />
    </div>
  </div>;
}