export function SSGet (prefix: string, key : string) {
  const i = sessionStorage.getItem (`${prefix}:${key}`);
  if (i) {
    const json = JSON.parse (i);
    if (json) {
      console.info (`Got ${key} from SessionStorage`);
      return json;
    }
  }
}

export function SSSet (prefix: string, key : string, data : Object) {
  sessionStorage.setItem (`${prefix}:${key}`, JSON.stringify (data));
  console.info (`Saved ${key} to SessionStorage`);
}