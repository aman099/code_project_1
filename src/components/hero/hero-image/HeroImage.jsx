import heroImg from "../../../assets/hero-main.png";
import heroAbsImg_1 from "../../../assets/hero-one.png";
import heroAbsImg_2 from "../../../assets/hero-two.png";
import Arrow from "../../Design Elements/Arrow";

function HeroImage() {
  return (
    <section id="hero-image">
      <div className="hero-img-container">
        <div className="arrow-cont">
          <Arrow
            height={30}
            width={40}
            color={" #8258f9"}
            className="violet-arr"
          />
          <span className="textFour">Launched Product</span>
        </div>
        <img
          src={heroImg}
          alt="Production launch plan"
          className="heroMainImg"
        />
        <div className="hero-absolute-img-1">
          <img src={heroAbsImg_1} alt="Task tracker" className="heroAbsImg_1" />
        </div>
        <div className="hero-absolute-img-2">
          <img
            src={heroAbsImg_2}
            alt="Progress tracker"
            className="heroAbsImg_2"
          />
        </div>
        <Arrow height={30} width={40} color={" #ffe803"} />
        <span className="textThree">My Team is ready!!</span>
      </div>
    </section>
  );
}

export default HeroImage;
