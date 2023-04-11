import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/Logo.svg'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo-container'>
        <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <ul className='menu-container'>
             <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
            <Link to="">
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
  )
}

export default Nav