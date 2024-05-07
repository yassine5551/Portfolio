import React from 'react'
import './Footer.css'
import wave from "../../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className='footer'>
          <img src={wave} style={{ width: '100%' }} alt="" />
          <div className="f-content">
              <span>yassin123beta@gmail.com</span>
              <div className='f-icons'>
                  <a href="https://www.instagram.com/__urahara__55/" target='_blank' >
                      <Insta color='white' size='3rem'/>
                  </a>
                  <a href='https://www.facebook.com/?locale=fr_FR' target='_blank'>
                       <Face color='white' size='3rem'/>
                  </a>
                  <a href="https://github.com/yassine5551" target="_blank" >
                      <Git color='white' size='3rem'/>
                 </a>
                  
              </div>
          </div>
    </div>
  )
}

export default Footer
