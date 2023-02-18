import { Link } from "react-router-dom";

export default function Aside({ data }) {
  return (
    <div className="aside-block">
      <h2>It can be lucky day for:</h2>
      <ul className="pet-list">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link to={{ pathname: `kittens/${item.name}` }}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
