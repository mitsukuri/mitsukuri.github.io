import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { StateCtx } from "../../components/Search";

import s from './character.module.css';

export default function Character () {
  const r = useRouter ();
  const {x} = r.query;
  const ix = parseInt (x as string);
  const state = useContext (StateCtx);

  useEffect (()=>{console.info (state)},[state]);

  return <div className={s.root}>И тут настало 4 утра понедельника и моск мой закипел, я так и не понял, как передать данные другой странице - контекст, который я раздаю аж через _app судя по всему сбрасывается, а getStaticProps я уже не в силах вкурить.. Прошу не поминать лихом.
  </div>
}