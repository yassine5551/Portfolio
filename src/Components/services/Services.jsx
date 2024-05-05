import "./services.css";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Resume from "../../resume/resume.pdf";

function Services() {
  return (
    <div className="services">
      {/* leftSide */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          sit amet consectetur adipisicing elit.
        </span>
        <a href={Resume} target="_blank">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* rightside */}
      <div className="cards">
        {/* first card */}
        <div style={{ left: "8rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"FrameWorks"}
            detail={"ReactJs, Laravel11 , NodeJs , ExpressJs ..."}
          />
        </div>
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

        <div style={{ top: "12rem", left: "22rem" }}>
          <Card
            emoji={Humble}
            heading={"Design"}
            detail={"Figma , AdobeXd , Photoshop , Canva ..."}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
