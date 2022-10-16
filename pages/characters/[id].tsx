import { useRouter } from "next/router";

export default function Post () {
  const r = useRouter ();
  const {id, wtf} = r.query;
  return <p>Id: {id}, wtf: {wtf}</p>
}