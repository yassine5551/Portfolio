import "./intro.css";

//images for left side
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
//end ofimages for left side

//images for right side
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>YASSINE EL KOUJJER</span>
          <span>
            FrontEnd Developper with high level of experience in web designing
            and developement, producting the Quality work{" "}
          </span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/yassine5551" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/elkoujjer-yassine-29b8ab261/"
            target="_blank"
          >
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/__urahara__55/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesemoji} alt="" />

        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developper" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Awards" />
              </div>
              {/* blur divs */}
              <div className="blur" style={{ background: 'rgb(238 210 255' }}></div>
              <div className="blur" style={{
                  background: '#C1F5FF',
                  top: '17rem',
                  width: '21rem',
                  height: '11rem',
                  left:'-9rem'
              }}></div>
      </div>
    </div>
  );
}

export default Intro;
