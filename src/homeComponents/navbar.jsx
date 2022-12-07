import React from 'react'
import '../layout/layout.css'
import Logo from '../assets/logo.png'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav__section'>
        <div className="logo_ex">
            <img src={Logo}  alt=""  />
        </div>

        <div>  
            <ul>
             
              <li>Menu</li>
                <li>Algorithms</li>
                <li>Lessons</li>
            </ul>
        </div>
    

    <button className="start">Start</button>
    </div>
  )
}

export default Navbar