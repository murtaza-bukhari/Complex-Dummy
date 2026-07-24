import "./component-styles/header.css";

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="main-header">
      <h1 className="logo">Complex</h1>

      <nav>
        <ul className="nav-links">
          <li className="hide">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>

          <li className="hide">
            <NavLink
              to="/facilities"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Facilities
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Booking
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};