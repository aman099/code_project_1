import "./Hero.scss";
import HeroImage from "./hero-image/HeroImage";
import Arrow from "../Design Elements/Arrow";

function Hero() {
  return (
    <header id="hero">
      <div className="hero-container maxWidth">
        <div className="hero-heading-container">
          <h1>Build your dream team</h1>
          <div className="hero-gradient">effectively</div>
          <Arrow height={30} width={40} color={"#74D8F8"} />
          <span className="text-one">I'm looking for a UI/UX Designer</span>
        </div>
        <div className="hero-desc">
          <p>We are here to help you in building the best team for you</p>
        </div>
        <div className="hero-btn-container">
          <button className="btn hero-btn">Get in touch</button>
          <Arrow height={30} width={40} color={" #ffc4b2"} />
          <span className="text-two">Let&#39;s meet @ 5pm</span>
          <div className="hero-btn-shadow"></div>
        </div>
      </div>
      <HeroImage />
    </header>
  );
}

export default Hero;
