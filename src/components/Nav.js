import React from 'react'
import logo from '../assets/Logo.svg'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo-container'>
        <img src={logo} alt="" />
        </div>
        <ul className='menu-container'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Menu
            </li>
            <li>
                Reservations
            </li>
            <li>
                Order Online
            </li>
            <li>
                Login
            </li>
        </ul>
    </div>
  )
}

export default Nav