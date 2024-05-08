
import './Experience.css'
import { themeContext } from '../../../context';
import { useContext } from 'react';
function Experience() {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="experience">
          <div className="achievement">
              <div className="circle" >2+</div>
              <span>years</span>
              <span>Experience</span>
          </div>
          <div className="achievement">
              <div className="circle">16+</div>
              <span>Completed</span>
              <span>Projects</span>
          </div>
          <div className="achievement">
              <div className="circle">1+</div>
              <span>Companies</span>
              <span>Vala Blue</span>
          </div>
    </div>
  )
}

export default Experience