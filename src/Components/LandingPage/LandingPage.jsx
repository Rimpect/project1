import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Stats from "../Stats/Stats";
import HowItWorks from "../HowItWorks/HowItWorks";
import Tagline from "../Tagline/Tagline";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const sectionMap = {
      "/about": "about",
      "/tokenomics": "tokenomics",
      "/presale": "presale",
      "/dao": "roadmap",
      "/social": "social",
    };

    const id = sectionMap[location.pathname];
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    }
  }, [location]);

  return (
    <div>
      <div id="about" className="hero-container">
        <Header />
        <HeroSection />
      </div>

      <div id="tokenomics">
        <Stats />
      </div>

      <div id="roadmap">
        <HowItWorks />
      </div>

      <div id="social">
        <Tagline />
      </div>

      <Footer />
    </div>
  );
}
