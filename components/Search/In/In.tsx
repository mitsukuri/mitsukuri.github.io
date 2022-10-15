import { useContext,
         useState }    from 'react';

import { StateCtx,
         DispatchCtx } from '../Search';
import style           from './In.module.css';

export default function In () {
  const [input, setInput] = useState ('');
  const dispatch          = useContext (DispatchCtx);
  const state             = useContext (StateCtx);

  function dispatchFocus () {dispatch ({what : 'input.focus'})}

  return (
  <div className = {[style.root, state.expanded && style.expanded].join (' ')}>
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