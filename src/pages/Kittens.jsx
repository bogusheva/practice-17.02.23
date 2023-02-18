import { Link } from "react-router-dom";

import Block from "../component/Block";

export default function Kittens({ data }) {
  return (
    <section className="kittens main">
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Block data={item} />
            </li>
          );
        })}
      </ul>
      <button className="button-home">
        <Link to="/">back Home</Link>
      </button>
    </section>
  );
}
