import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="/src/img/icons/WhiteLogo.png" alt="Логотип" />
      </div>
      <div>
        <nav className="header-nav">
          <a href="/about">About</a>
          <a href="/tokenomics">Tokenomics</a>
          <a href="/presale">Presale</a>
          <a href="/dao">DAO</a>
          <a href="/roadmap">Roadmap</a>
        </nav>
      </div>
    </div>
  );
}
