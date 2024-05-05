import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
function Intro() {
  return (
      <div className="intro">
          
          <div className="i-left">
              <div className="i-name">
                  <span>Hy! I Am </span>
                  <span>YASSINE EL KOUJJER</span>
                  <span>FrontEnd Developper with high
                      level of experience in web designing
                      and developement, producting the
                      Quality work </span>
              </div>
              
              <button className="button i-button">Hire me</button>
              <div className="i-icons">
                  <a href="https://github.com/yassine5551" target='_blank'>    
                  <img src={Github} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/elkoujjer-yassine-29b8ab261/" target='_blank'>
                      <img src={Linkedin} alt="" />
                  </a>
                  <a href="https://www.instagram.com/__urahara__55/" target='_blank'>
                      <img src={Instagram} alt="" />
                  </a>
                  
              </div>
              
          </div>
          <div className="i-right">
              im right side
          </div>
    </div>
  )
}

export default Intro