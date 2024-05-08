import "./services.css";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Resume from "../../resume/resume.pdf";
import { themeContext } from '../../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion'



function Services() {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* leftSide */}
      <div className="awesome">
        <span style={{color : darkMode? 'white':''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          sit amet consectetur adipisicing elit.
        </span>
        <a href={Resume} target="_blank">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* rightside */}
      <div className="cards">
        {/* first card */}
        <motion.div
          whileInView={{ left: '8rem' }}
          initial={{ left: '25rem  ' }}
          transition={transition}
          style={{ left: "8rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"FrameWorks"}
            detail={"ReactJs, Laravel11 , NodeJs , ExpressJs ... "}
          />
        </motion.div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-6rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "HTML5, CSS3 , Javascript, PHP  , MySQl , Mongodb , Api ..."
            }
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "8rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "I will make Better Design For your projects and your bussines"
            }
          />
        </div>
        {/* forth card */}

        <motion.div
        whileInView={{ left: '22rem' }}
        initial={{ left: '25rem  ' }}
          transition={transition}
          style={{ top: "12rem", left: "22rem" }}>
          <Card
            emoji={Humble}
            heading={"Design"}
            detail={"Figma , AdobeXd , Photoshop , Canva ..."}
          />
        </motion.div>

        <div className="blur s-blur2" style={{background:"Var(--purple)"}}></div>
      </div>
    </div>
  );
}

export default Services;
