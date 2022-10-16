import { useContext,
         useState }    from 'react';

import { StateCtx,
         DispatchCtx } from './Search';
import style           from './In.module.css';

export default function In () {

  const [input, setInput] = useState ('');
  const dispatch          = useContext (DispatchCtx);
  const state             = useContext (StateCtx);

  return (
  <div className = {[style.root, state.mini && style.mini].join (' ')}>
    <div className={style.box}>
      <div className={style.logo}>
        Star Wars
        <br/>
        <span className={style.smaller}>Search Engine</span>
      </div>
      <input
      className   = {style.input}
      type        = "text"
      placeholder = "May the force be with you..."
      onInput     = {e => setInput (e.currentTarget.value)}
      onKeyDown   = {e => {
          if (e.key === 'Enter') {
            dispatch ({what: 'input.change', payload : input});
            !state.mini && dispatch ({what: 'minimize'});
          }
        }
      }
      />
    </div>
</div>);
}