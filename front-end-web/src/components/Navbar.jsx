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
            <li><a href='/'>Service</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar