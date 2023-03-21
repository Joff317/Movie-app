import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/coup-de-coeur"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Coups de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
