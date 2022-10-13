import css from "styled-jsx/css"

const style = css`
  #root {
    background: blue;
    width: 100%;
    height: 100%;
  }
`

export default function Out () {
  return <div id="root">
    <style jsx>{style}</style>
    Out
  </div>
}