import "./ContactUs.scss";

import Form from "./Form";

import boxesContactUs from "../../assets/contact-us/boxes_contact_us.svg";

function ContactUs() {
  return (
    <>
      <aside className="maxWidth" id="contact">
        <div className="contact-container maxWidth_1300">
          <div className="contact-left-side">
            <div className="contact-heading">
              <p>Contact Us</p>
            </div>
            <div className="contact-para">
              <h2>
                Your Vision, Our <br /> Mission: Building <br /> Success
                Together
              </h2>
            </div>
            <div className="contact-bottom">
              <p>
                Send us your queries, we will get back <br /> to you as early as
                possible
              </p>
            </div>
            <div className="contact-follow-us">
              <div className="contact-follow-heading">
                <p>Follow Us</p>
              </div>
              <div className="icons-container">
                <span>
                  <i className="fa-brands fa-x-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
                <span>
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-right-side">
            <Form />
          </div>
          <span className="boxes-contact-us">
            <img src={boxesContactUs} alt="Decoration boxes" />
          </span>
        </div>
      </aside>
      <div className="maxWidth" id="location">
        <div className="location-container">
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <p>5 Frieght Road, Ravenhall, VIC, 3023</p>
        </div>
        <div className="phone-container">
          <span>
            <i className="fa-solid fa-phone"></i>
          </span>
          <p>1234 567 890</p>
        </div>
        <div className="mail-container">
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
          <p>examplehelp@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
