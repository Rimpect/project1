import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src="/src/img/icons/WhiteLogo.png" alt="Логотип" />
        </div>

        <nav className="header-nav">
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/tokenomics" onClick={toggleMenu}>
            Tokenomics
          </Link>
          <Link to="/#" onClick={toggleMenu}>
            Presale
          </Link>
          <Link to="/dao" onClick={toggleMenu}>
            DAO
          </Link>
          <Link to="/social" onClick={toggleMenu}>
            Roadmap
          </Link>
        </nav>

        <div className="burger-menu" onClick={toggleMenu}>
          <img src="/src/img/elements/BurgerMenu.png" alt="Меню" />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          ×
        </div>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/tokenomics" onClick={toggleMenu}>
          Tokenomics
        </Link>
        <Link to="/#" onClick={toggleMenu}>
          Presale
        </Link>
        <Link to="/dao" onClick={toggleMenu}>
          DAO
        </Link>
        <Link to="/social" onClick={toggleMenu}>
          Roadmap
        </Link>
      </div>
    </>
  );
}
