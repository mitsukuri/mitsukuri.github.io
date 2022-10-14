import { createContext,
         useContext,
         useEffect,
         useReducer,
         useState }    from "react";
import { SwapiPeople } from "../../interfaces/swapi-people";
import In              from "./In/In";
import Out             from "./Out/Out";


type SwapiPeopleResponse = {
  count    : number,
  next     : string,
  previous : string,
  results  : SwapiPeople []
}

export type SearchAction = {
  type   : string,
  value? : string | boolean
}

type SearchState = {
  expanded : boolean,
  data     : SwapiPeople[],
  input    : string
};

export const searchStateCtx = createContext ({
  expanded : true,
  data     : [] as SwapiPeople[],
  input    : ''
});

function reducer (state : SearchState, action : SearchAction) : SearchState {
  switch (action.type) {
    case 'input.focus': return {...state, expanded : false};
    case 'input.input':
      console.info (`input: ${action.value}`);
      return {...state, input : action.value as string};
    case 'input.change':
      console.info (`change: ${state.input}`);
      return {...state};
  }
  throw new Error (`Undefined action "${action.type}"`);
}

export default function Search () {

  const initState = useContext (searchStateCtx);
  const [state, dispatch] = useReducer (reducer, initState);

/*   // NEVER fetch outside of useEffect !
  useEffect (() => {
    const ac = new AbortController ();
    (async () => {
      try {
        const res = await fetch ('https://swapi.dev/api/people/?search=sky');
        if (!res.ok) throw new Error (res.statusText);
        const json = await res.json () as SwapiPeopleResponse;
        console.info (json);
        if (!json.results) throw new Error ('Can\'t fetch data');
        setData (json.results);
      } catch (e) {throw e}
    })();
    return () => ac?.abort ();
  },[]); // <== NEVER forget the [], otherwise fetch loops infinitely */

  return (
  <searchStateCtx.Provider value={state}>
    <In dispatch={dispatch}/>
    {!state.expanded && <Out dispatch={dispatch}/>}
  </searchStateCtx.Provider>
  );
}