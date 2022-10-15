import { useRouter } from "next/router";

export default function E404 () {

  const r = useRouter ();

  return <>
  <h1 suppressHydrationWarning>
    Hrrrm, by &quot;{r.asPath}&quot; what you do mean? The undefined side of the force your path has led you to!
  </h1>
  <button onClick={() => r.back ()}>
    Back you go, padavan, and your side choose wisely!
  </button>
  </>
}