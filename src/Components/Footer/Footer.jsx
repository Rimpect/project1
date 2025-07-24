import React from "react";
import "./Footer.css";

export default function Footer() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header-container')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>About</a>
          <a href="#tokenomics" onClick={(e) => handleSmoothScroll(e, "tokenomics")}>Tokenomics</a>
          <a href="#presale" onClick={(e) => handleSmoothScroll(e, "presale")}>Presale</a>
          <a href="#dao">DAO</a>
          <a href="#roadmap" onClick={(e) => handleSmoothScroll(e, "roadmap")}>Roadmap</a>
          <a href="#about" onClick={scrollToTop}>Up</a>
        </nav>
      </div>
    </div>
  );
}