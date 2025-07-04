import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import { Link } from "react-scroll";
const Works = () => {
  const transition = { duration: 3.5, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* leftSide */}
      <div className="awesome">
        <span style={{color : darkMode? 'white' : ''}}>Looking to <br />
        Works for All these</span>
        <span>Brands</span>
        <span>
          I worked for Vala blue Company .
          <br />
          And I have been developing
          <br />
          websites and apps
           for the past 2 years .
        </span>
        <Link spy={true} to="Contact" smooth={true} duration={2000} offset={-50}>
        <button className="button s-button">Hire me</button>
        </Link>
        

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* RightSide */}
      <div className="w-right">
        <motion.div
        initial={{ rotate : 45   }}
          whileInView={{ rotate: 0 }}
          viewport={{margin: '-40px'}}
          transition={transition}
          className="w-mainCircle">
          <div className="w-secCircle'-40px'">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          {/* backGroundCircles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
