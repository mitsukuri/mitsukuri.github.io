import css from "styled-jsx/css";

const style = css`
  input {
    width: 50%;
  }
`;

export default function In () {
  return <>
    <style jsx>{style}</style>
    <input
      type="search" placeholder="Find them across the whole galaxy!"
    />
  </>;
}