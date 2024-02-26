// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";


/* ORDER OF NAV BAR */

// [Logo icon]  (Steven Cooks logo)
// [Search bar] (input field and search button)
// Links
const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <li className="navbar-item">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Logo" id="logo" />
          </Link>
        </li>

        <li className="navbar-item navbar-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </li>

        <ul className="navbar-links navbar-item">

          <li className="nav-item"> <Link to="/">Home</Link> </li>

          <li className="nav-item"> <Link to="/browse">Browse Recipes</Link> </li>

          <li className="nav-item"> <Link to="/about">About</Link> </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
