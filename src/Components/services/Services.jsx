
import './services.css'
import Humble from '../../img/humble.png'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'

function Services() {
    return (
        <div className="services">

            {/* leftSide */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    sit amet consectetur adipisicing elit.
                </span>
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
            </div>
            {/* rightside */}
            <div className='cards'>
                <div>
                    <Card emoji={HeartEmoji} heading={'Design'} detail ={'Figma, PhotoShop , Sketch, AdobeXd'}/>
                    </div>
            </div>
    </div>
  )
}

export default Services