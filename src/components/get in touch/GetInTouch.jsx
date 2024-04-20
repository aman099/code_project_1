import "./GetInTouch.scss";

import getInTouchBubblesImg from "../../assets/getInTouch/getInTouchBubbles.png";
import bubbles_2 from "../../assets/getInTouch/bubbles-2.svg";
import Arrow from "../Design Elements/Arrow";

function GetInTouch() {
  return (
    <section id="get_in_touch">
      <div className="get_in_touch_container maxWidth_1200">
        <div className="get_in_heading_container">
          <h2>Get in Touch</h2>
          <Arrow color={"var(--color-arrow-1)"} height={30} width={40} />
          <span className="text-one">Team Manager</span>
        </div>
        <div className="get_in_para_container">
          <p>Still struggling with your problems, connect with us today.</p>
        </div>
        <div className="get_in_btn_container">
          <button className="btn btn-get-in">Get in Touch</button>
          <div className="get-in-btn-shadow"></div>
          <Arrow color={"var(--color-arrow-2)"} height={30} width={40} />
          <span className="text-two">Team Manager</span>
          <Arrow
            className={"arrow-three"}
            color={"var(--color-arrow-3)"}
            height={30}
            width={40}
          />
          <span className="text-three">Business Owner</span>
        </div>
      </div>
      <div className="bubbles">
        <img src={getInTouchBubblesImg} alt="Bubbles" />
      </div>
      <div className="bubbles-2">
        <img src={bubbles_2} alt="Bubbles" />
      </div>
    </section>
  );
}

export default GetInTouch;
