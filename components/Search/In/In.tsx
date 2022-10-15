
import { Dispatch, useContext, useState } from 'react';

import style                              from './In.module.css';
import { SearchAction, StateCtx }         from '../Search';

export default function In
({dispatch} : {dispatch : Dispatch <SearchAction>})
{
  const [input, setInput] = useState ('');

  function dispatchFocus () {dispatch ({what : 'input.focus'})}

  const ctx = useContext (StateCtx);

  return (
  <div className = {[style.root, ctx.expanded && style.expanded].join (' ')}>
    <div className = {style.chrome}>
      <input
        className   = {style.input}
        type        = "text"
        placeholder = "May the force be with you"
        onFocus     = {dispatchFocus}
        onInput     = {e => setInput (e.currentTarget.value)}
        onKeyDown   = {e => {e.key === 'Enter' && dispatch ({
          what: 'input.change', payload : input})}}
      />
    </div>
  </div>);
}