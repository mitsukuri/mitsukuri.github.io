import Router           from "next/router";

import { createContext,
         Dispatch,
         useEffect,
         useReducer}    from "react";

import { SwapiPeople }  from "../interfaces/swapi-people";
import { fetchJSON,
         getSS}         from "../util/util";
import In               from "./In";
import Out              from "./Out";

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
  init     : false,
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
      case 'initialize'  : return {...state, init : true};
      case 'minimize'    : return {...state, mini : true};
      case 'input.change': return {...state, commit : action.payload as string};
      case 'data.fetch'  :
      console.info (action.payload);
      return {...state, data : action.payload as SwapiPeople[]};
    }
    throw new Error (`Undefined action "${action.what}"`);
  }

  useEffect (() => {
    dispatch ({what : 'initialize'});
  },[]);

  useEffect (() => {
    if (state.commit === '') return;

    const cached = getSS ('query', state.commit);
    if (cached) {
      dispatch ({what: 'data.fetch', payload: cached});
      return;
    }

    Router.push ('/', `/search?q=${state.commit}/`, {shallow: true});

    /* const ac = new AbortController ();

    (async () => {
      try {
        let next = '';
        const results = [] as SwapiPeople[];
        do {
          const res = await fetch (
            next ? next :
            `https://swapi.dev/api/people/?search=${state.commit}`, {mode: "cors"});

          if (!res.ok) throw new Error (res.statusText);

          const json = await res.json () as SwapiPeopleResponse;
          if (!json.results) throw new Error ('Can\'t fetch data');

          results.push (...json.results);
          next = json.next;
        } while (next);

        dispatch ({what: 'data.fetch', payload: results})
        results.length && setSS ('query', state.commit, results);
      }
      catch (e) {throw e}
    })();
 */
    const abort = fetchJSON <SwapiPeople> (`https://swapi.dev/api/people/?search=${state.commit}`, d => dispatch ({what: 'data.fetch', payload: d}));

    return () => abort.abort ();

  },[state.commit]);

  return (
  <StateCtx.Provider value = {state}>
    <DispatchCtx.Provider value = {dispatch}>
      <In/>
    </DispatchCtx.Provider>
    {state.mini && <Out/>}
  </StateCtx.Provider>
  );
}