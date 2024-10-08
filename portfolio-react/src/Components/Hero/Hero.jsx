import React from 'react'
import "./Hero.css"
import ProfileImg2 from "../../assets/profile-image-2.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={ProfileImg2} alt="Profile-image" />
        <h1><span>I'm Deepesh Pundir,</span> Mern Stack developer based in India.</h1>
        <p>I am a Mern Stack developer from Mohali, India with 1.5 years of experience in companies like CodeDrill Infotech and Geekster.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}
