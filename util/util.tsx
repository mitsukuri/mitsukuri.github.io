import { URL as string } from "url";

export function getSS (prefix: string, key : string) {
  const i = sessionStorage.getItem (`${prefix}:${key}`);
  if (i) {
    const json = JSON.parse (i);
    if (json) {
      return json;
    }
  }
}

export function setSS (prefix: string, key : string, data : Object) {
  sessionStorage.setItem (`${prefix}:${key}`, JSON.stringify (data));
}

type SWAPIjson <T> = {next : string|null, result : T[]};

export function fetchJSON <T> (url : string, onData : (data : T[])=>void) {
  const ac = new AbortController ();

  async function getPart (url : string) {
    console.info (`getPart(${url})`);
    try {
      const res = await fetch (url, {signal : ac.signal});
      if (!res.ok) throw new Error (res.statusText);
      const json = await res.json ();
      if (!json) throw new Error (`Can't fetch data`);
      console.info (`getPart: ${json}`);
      return json as SWAPIjson <T>;
    } catch (e) {throw e}
  }
  function getAll (url : string) {
    console.info (`getAll(${url})`);
    const jsonP = getPart (url);
    jsonP.then (json => {
      onData (json.result);
      json.next && getAll (json.next);
    });
  }
  getAll (url);
  return ac;
}