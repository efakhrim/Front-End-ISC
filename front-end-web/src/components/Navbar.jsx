// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <div>Infant Smart Care</div>
        </div>
        <ul className='navbar-menu'>
            <li><a href='/'>Login Page</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar