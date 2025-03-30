import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        {/* Brand Name with Animation */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          <span className="brand-icon">🌟</span> My Portfolio
        </Link>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === `/` ? "active" : ""}`} to={`/`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === `/about` ? "active" : ""}`} to={`/about`}>
                About Me
              </Link>
            </li>
            {["Assignment", "Gallery"].map((page) => (
              <li className="nav-item" key={page}>
                <Link className={`nav-link ${location.pathname === `/${page.toLowerCase()}` ? "active" : ""}`} to={`/${page.toLowerCase()}`}>
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
