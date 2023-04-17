import React from 'react'
import { Link } from 'react-router-dom'
import  smLogo  from '../assets/smlogo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
      <img src={smLogo} alt='Little Lemon'/>
      </div>
      <div className='footer-menu'>
        <h3>Navigation</h3>
        <ul>
             <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
            <Link to="/#chicago">
                About
                </Link>
            </li>
            <li>
            <Link to="/">
                Menu
                </Link>
            </li>
            <li>
            <Link to="/booking">
                Reservations
                </Link>
            </li>
            <li>
            <Link to="/">
               Order Online
                </Link>
            </li>
            <li>
            <Link to="/">
                Login
                </Link>
            </li>
        </ul>
      </div>
      <div className='footer-contact'>
        <h3>Contact Us</h3>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      </div>
      <div className='footer-social'>
      <h3>Socials</h3>
      <ul>
        <li>FB</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
        </div>
        </div>
  )
}

export default Footer