import { useRouter } from "next/router";

export default function Post () {
  const r = useRouter ();
  const {id, q} = r.query;
  return <p>id: {id}, q: {q}</p>
}