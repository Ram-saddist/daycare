import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img
            src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/00df9c22-04d2-41c2-bcbe-eee37867f14d.png"
            alt="Logo"
            width="45"
            height="45"
            className="me-2"
          />
          <strong>MyApp</strong>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={closeNavbar}>
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register" onClick={closeNavbar}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-doctor" onClick={closeNavbar}>
                Add Doctor
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
