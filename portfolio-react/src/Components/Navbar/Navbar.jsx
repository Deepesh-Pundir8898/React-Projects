import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import ourlogo from "../../assets/portfolio-high-resolution-logo-transparent.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={ourlogo} alt=""  width={"180px"}/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <button className='nav-connect'>Connect With Me</button>
    </div>
  )
}

export default Navbar
