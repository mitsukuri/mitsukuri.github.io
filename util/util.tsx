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