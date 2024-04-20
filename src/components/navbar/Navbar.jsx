import { useEffect, useState } from "react";
import navbar_logo from "../../assets/Vector.svg";
import "./Navbar.scss";

import scrollIntoSection from "../../utils/scrollIntoSection";

import HamburgerIcon from "../../assets/navbar/Hamburger_Icon.svg";

function Navbar({ navbarMenus }) {
  const [scrolled, setScrolled] = useState(false);

  function addSticky() {
    if (window.scrollY > document.querySelector("#hero").offsetHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", addSticky);
  }, []);

  return (
    <nav className={`${scrolled ? "sticky" : ""}`} id="nav">
      <div className="nav-container maxWidth_1200">
        <div className="nav-logo-img-container">
          <img src={navbar_logo} alt="Company logo" />
        </div>
        <ul>
          {navbarMenus.map((menu, idx) => (
            <li
              key={idx}
              onClick={(e) => scrollIntoSection(e.target.textContent)}
            >
              {menu}
            </li>
          ))}
        </ul>
        <div className="nav-btns-container">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-signup">signup</button>
          <div className="hamburger_icon">
            <img src={HamburgerIcon} alt="Menu Icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
