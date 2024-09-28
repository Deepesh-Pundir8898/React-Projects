import React from 'react'
import "./Footer.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import user_icon from "../../assets/user_icon.svg"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className='footer-logo'>
                    <h2>Deepesh Pundir</h2>
                    <img src={theme_pattern} alt="" />
                </div>
                <p>I am a MERN developer from, India with 1.5 years of experience in companies like CodeDrill Infotech and Geekster.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className="footer-bottom-left">Copyright 2023 Deepesh Pundir. All rights</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
