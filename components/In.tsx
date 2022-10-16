import { useContext,
         useState }    from 'react';

import { StateCtx,
         DispatchCtx } from './Search';
import s               from './In.module.css';

export default function In () {

  const [input, setInput] = useState ('');
  const dispatch          = useContext (DispatchCtx);
  const state             = useContext (StateCtx);

  return (
  <div className = {[state.mini ? s.root_mini : s.root].join (' ')}>
    <div className={[state.mini ? s.box_mini : s.box,
                     state.init ? s.box_done : s.box_init].join (' ')}>
      <div className={s.logo}>
        Star Wars
        <br/>
        <span className={s.smaller}>Search Engine</span>
      </div>
      <input
      className   = {s.input}
      type        = "text"
      placeholder = "May the Force be with you..."
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