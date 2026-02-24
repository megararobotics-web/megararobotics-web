import { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ NavLink gives active styling
import "./Navbar.css";
import megaraLogo from "/assets/megaraLogo.png";
import hutlablogo from "/assets/hutlablogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="blur-overlay">
      <div className="navbar-container">
        {/* Left Logo */}
        <img src={megaraLogo} alt="Left Logo" className="navbar-logo" />

        {/* Menu Items */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={closeMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

         <li>
            <NavLink to="/teams" onClick={closeMenu}>
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Right Logo */}
        <img src={hutlablogo} alt="Right Logo" className="navbar-logo1" />

        {/* Hamburger Button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
