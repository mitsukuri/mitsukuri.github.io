import { createContext,
         useEffect,
         useReducer}   from "react";

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
  what      : string,
  payload?  : string | boolean | SwapiPeople []
}
const initState = {
  commit   : '',
  expanded : true,
  data     : [] as SwapiPeople[],
};
export type TSearchState = typeof initState;
export const StateCtx    = createContext (initState);

export default function Search () {

  const [state, dispatch] = useReducer (reducer, initState);

  function reducer (state : TSearchState, action : SearchAction) : TSearchState
  {
    switch (action.what) {
      case 'input.focus' : return {...state, expanded : false}
      case 'input.change': return {...state, commit : action.payload as string};
      case 'data.fetch'  : return {...state,
                                      data : action.payload as SwapiPeople[]};
    }
    throw new Error (`Undefined action "${action.what}"`);
  }

  useEffect (() => {
    if (state.commit === '') return;

    const ac = new AbortController ();

    (async () => {
      try {
        const res = await fetch (
          `https://swapi.dev/api/people/?search=${state.commit}`);

        if (!res.ok) throw new Error (res.statusText);

        const json = await res.json () as SwapiPeopleResponse;
        console.info (json);

        if (!json.results) throw new Error ('Can\'t fetch data');

        dispatch ({what: 'data.fetch', payload: json.results})
      }
      catch (e) {throw e}
    })();

    return () => ac?.abort ();

  },[state.commit]);

  return (
  <StateCtx.Provider value = {state}>
    <In dispatch = {dispatch}/>
    <Out dispatch = {dispatch}/>
  </StateCtx.Provider>
  );
}