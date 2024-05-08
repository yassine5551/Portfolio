import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Yassine</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link className="lk"
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link className="lk" spy={true} to="Services" smooth={true} duration={1500} offset={-30}>
              <li>Services</li>
            </Link>
            <Link className="lk" spy={true} to="Experience" smooth={true} duration={1800}>
              <li>Experience</li>
            </Link>
            <Link className="lk" spy={true} to="Portfolio" smooth={true} duration={2000}>
              <li>Portfolio</li>
            </Link>
            <Link className="lk" spy={true} to="Testimonials" smooth={true} duration={2000}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} duration={2000} offset={-50}>
          <button className="button n-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
