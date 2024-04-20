import "./Footer.scss";

import companyLogo from "../../assets/footer-logo.png";

const footerIcons = [
  {
    icon: "fa-x-twitter",
  },
  {
    icon: "fa-facebook-f",
  },
  {
    icon: "fa-instagram",
  },
  {
    icon: "fa-reddit-alien",
  },
];

const footerContent = [
  {
    title: "product",
    option1: "pricing",
    option2: "overview",
    option3: "AI based solutions",
    option4: "team tracking",
    option5: "team collab",
  },
  {
    title: "solutions",
    option1: "design",
    option2: "research",
    option3: "wireframming",
    option4: "real time progress",
    option5: "brain storming",
  },
  {
    title: "resources",
    option1: "help center",
    option2: "blog",
    option3: "tutorials",
    option4: null,
    option5: null,
  },
  {
    title: "company",
    option1: "about us",
    option2: "services",
    option3: "contact us",
    option4: "career",
    option5: null,
  },
];

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container maxWidth_1250">
        <div className="main-grid">
          <div className="grid-left">
            <div className="left-img-container">
              <img src={companyLogo} alt="Company logo" />
            </div>
            <p className="sm-handles">Social Media Handles</p>
            <div className="sm-icons">
              {footerIcons.map(({ icon }, idx) => (
                <span key={idx}>
                  <i className={`fa-brands ${icon}`}></i>
                </span>
              ))}
            </div>
          </div>
          <div className="grid-right">
            <div className="secondary-grid">
              {footerContent.map((footerCont, idx) => (
                <ul key={idx} className="sec-grid">
                  <li className="title">{footerCont.title}</li>
                  <li>{footerCont.option1}</li>
                  <li>{footerCont.option2}</li>
                  <li>{footerCont.option3}</li>
                  <li>{footerCont.option4}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <p className="copyright">
          @ 2024 Code Project, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
