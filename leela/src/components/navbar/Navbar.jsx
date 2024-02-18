import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
      <Link to="/" className="title">
        Leela
      </Link>
      <ul>
        <li>
          <NavLink to="/demo">Demo</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/market">Market</NavLink>
        </li>
      </ul>
    </nav>
    );
}