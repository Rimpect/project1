import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src="/src/img/icons/WhiteLogo.png" alt="Логотип" />
        </div>

        <nav className="header-nav">
          <a href="/about">About</a>
          <a href="/tokenomics">Tokenomics</a>
          <a href="/presale">Presale</a>
          <a href="/dao">DAO</a>
          <a href="/roadmap">Roadmap</a>
        </nav>

        <div className="burger-menu" onClick={toggleMenu}>
          <img src="/src/img/elements/BurgerMenu.png" alt="Меню" />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          ×
        </div>
        <a href="/about" onClick={toggleMenu}>
          About
        </a>
        <a href="/tokenomics" onClick={toggleMenu}>
          Tokenomics
        </a>
        <a href="/presale" onClick={toggleMenu}>
          Presale
        </a>
        <a href="/dao" onClick={toggleMenu}>
          DAO
        </a>
        <a href="/roadmap" onClick={toggleMenu}>
          Roadmap
        </a>
      </div>
    </>
  );
}
