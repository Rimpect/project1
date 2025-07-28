import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="BlackLogo">
        <img src="/src/img/icons/BlackLogo.png" alt="Логотип" />
      </div>

      <div className="group-icons">
        <img src="/src/img/icons/TelegrammIcon.png" alt="Telegram Icon" />
        <img src="/src/img/icons/XIcon.png" alt="X Icon" />
        <img src="/src/img/icons/Logo1Icon.png" alt="Logo 1 Icon" />
        <img src="/src/img/icons/Logo2Icon.png" alt="Logo 2 Icon" />
      </div>

      <div className="footer-nav-wrapper">
        <nav className="footer-nav">
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
          <Link to="/" onClick={scrollToTop}>
            Up
          </Link>
        </nav>
      </div>
    </div>
  );
}
