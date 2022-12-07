import React from 'react'
import Mhero from '../assets/Hero-1.png'
import Logo from '../assets/logo.png'
import TypeWriterC from "./typewriter";
import '../layout/layout.css'
const Hero = () => {
  return (
    <div className='hero__wrapper'>
        <div className="hero-bckgrn">
          <div className="hero__flex-left">

          <div className="logo_ex2">
            <img src={Logo}  alt=""  />
        </div>
            <TypeWriterC/>
            <button className='start'>Get Started !</button>
          </div>

          <div className="hero__flex-right">
            <img src={Mhero} alt="dc"  width={'750px'} height={'700px'}/>
          </div>
          
        </div>

    </div>
  )
}

export default Hero