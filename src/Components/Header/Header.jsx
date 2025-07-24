import React, { useState } from "react";
import "./Header.css";

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
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
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
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>About</a>
          <a href="#tokenomics" onClick={(e) => handleSmoothScroll(e, "tokenomics")}>Tokenomics</a>
          <a href="#presale" onClick={(e) => handleSmoothScroll(e, "presale")}>Presale</a>
          <a href="#dao">DAO</a>
          <a href="#roadmap" onClick={(e) => handleSmoothScroll(e, "roadmap")}>Roadmap</a>
        </nav>

        <div className="burger-menu" onClick={toggleMenu}>
          <img src="/src/img/elements/BurgerMenu.png" alt="Меню" />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>About</a>
        <a href="#tokenomics" onClick={(e) => handleSmoothScroll(e, "tokenomics")}>Tokenomics</a>
        <a href="#presale" onClick={(e) => handleSmoothScroll(e, "presale")}>Presale</a>
        <a href="#dao">DAO</a>
        <a href="#roadmap" onClick={(e) => handleSmoothScroll(e, "roadmap")}>Roadmap</a>
      </div>
    </>
  );
}