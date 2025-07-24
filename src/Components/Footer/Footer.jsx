import React from "react";
import "./Footer.css";

export default function Footer() {
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
          <a href="/#">About</a>
          <a href="/#">Tokenomics</a>
          <a href="/#">Presale</a>
          <a href="/#">DAO</a>
          <a href="/#">Roadmap</a>
          <a href="/up">Up</a>
        </nav>
      </div>
    </div>
  );
}
