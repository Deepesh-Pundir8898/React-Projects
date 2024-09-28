import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import logo from "../../assets/logo.svg"
import ourlogo from "../../assets/portfolio-high-resolution-logo-transparent.png"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  
  const [menu ,setMenu] = useState("home");
  

  return (
    <div className='navbar'>
        <img src={ourlogo} alt=""  width={"180px"}/>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} />:<></>} </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} />:<></>} </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} />:<></>} </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} />:<></>} </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} />:<></>} </li>
        </ul>
        <button className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></button>
    </div>
  )
}

export default Navbar
