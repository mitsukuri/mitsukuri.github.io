import { createContext,
         Dispatch,
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
type SearchAction = {
  what      : string,
  payload?  : string | boolean | SwapiPeople []
}
const initState = {
  commit   : '',
  mini     : false,
  data     : [] as SwapiPeople[],
};
type TSearchState = typeof initState;

export const StateCtx    = createContext (initState);
export const DispatchCtx = createContext ({} as Dispatch <SearchAction>);

////////////////////////////[Search]/////////////////////////////////////

export default function Search () {

  const [state, dispatch] = useReducer (reducer, initState);

  function reducer (state : TSearchState, action : SearchAction) : TSearchState
  {
    switch (action.what) {
      case 'minimize'    : return {...state, mini : true};
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
        let next = '';
        const results = [] as SwapiPeople[];
        do {
          const res = await fetch (
            next ? next :
            `https://swapi.dev/api/people/?search=${state.commit}`);

          if (!res.ok) throw new Error (res.statusText);

          const json = await res.json () as SwapiPeopleResponse;
          if (!json.results) throw new Error ('Can\'t fetch data');

          results.push (...json.results);
          next = json.next;
        } while (next);

        console.info (results);
        dispatch ({what: 'data.fetch', payload: results})
      }
      catch (e) {throw e}
    })();

    return () => ac?.abort ();

  },[state.commit]);

  return (
  <StateCtx.Provider value = {state}>
    <DispatchCtx.Provider value = {dispatch}>
      <In/>
    </DispatchCtx.Provider>
    <Out/>
  </StateCtx.Provider>
  );
}