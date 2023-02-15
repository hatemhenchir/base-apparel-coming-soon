import heroDesktop from "../images/hero-desktop.jpg";
import heroMobile from "../images/hero-mobile.jpg";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img src={heroMobile} className="hero-mobile" alt="hero" />
      <img src={heroDesktop} className="hero-desktop" alt="hero" />
    </div>
  );
};
export default Hero;
