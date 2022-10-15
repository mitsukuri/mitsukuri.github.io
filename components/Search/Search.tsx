import { createContext,
         useContext,
         useEffect,
         useReducer,
         useState}  from "react";
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
const initState = {
  commit   : '',
  expanded : true,
  data     : [] as SwapiPeople[],
};
export type TSearchState = typeof initState;
export const SearchCtx = createContext (initState);

export default function Search () {

  const [state, dispatch] = useReducer (reducer, initState);

  function reducer (state : TSearchState, action : SearchAction) : TSearchState {
    switch (action.type) {
      case 'input.focus': return (state.expanded)
        ? {...state, expanded : false}
        : state;
      case 'input.change':
        console.info (`change: ${action.value}`);
        return {...state, commit : action.value as string};
    }
    throw new Error (`Undefined action "${action.type}"`);
  }

  useEffect (() => {
    if (state.commit === '') return;
    console.info ('useEffect on [commit, state]');
    const ac = new AbortController ();
    (async () => {
      try {
        const res = await fetch (
          `https://swapi.dev/api/people/?search=${state.commit}`);
        if (!res.ok) throw new Error (res.statusText);
        const json = await res.json () as SwapiPeopleResponse;
        console.info (json);
        if (!json.results) throw new Error ('Can\'t fetch data');
        state.data = (json.results);
      } catch (e) {throw e}
    })();
    return () => ac?.abort ();
  },[state]);

  return (
  <SearchCtx.Provider value={state}>
    <In dispatch={dispatch}/>
    {!state.expanded && <Out dispatch={dispatch}/>}
  </SearchCtx.Provider>
  );
}