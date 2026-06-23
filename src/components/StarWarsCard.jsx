import React from "react";
import { Link, NavLink } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store } = useGlobalReducer();
  const totalFavs = store.favorites?.length || 0;

  const navItems = [
    { to: "/starwars", label: "EXPLORAR" },
    { to: "/favorites", label: "FAVORITOS" },
  ];

  return (
    <nav className="sw-navbar">
      {/* Logo */}
      <Link to="/starwars" className="sw-logo">
        STAR<span>WARS</span>
        <small>GALAXY ARCHIVE</small>
      </Link>

      {/* Toggle (mobile) */}
      <button className="sw-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#swNav">
        ☰
      </button>

      <div className="collapse navbar-collapse" id="swNav">
        {/* Links */}
        <ul className="sw-nav-links">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `sw-link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Favorites */}
        <Link to="/favorites" className="sw-fav-btn">
          ♥ FAVORITOS
          <span className="sw-badge">{totalFavs}</span>
        </Link>
      </div>
    </nav>
  );
};