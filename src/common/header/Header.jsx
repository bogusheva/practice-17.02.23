import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Kitty's Shelter</div>
      <ul className="header-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/kittens">Kittens</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </header>
  );
}
