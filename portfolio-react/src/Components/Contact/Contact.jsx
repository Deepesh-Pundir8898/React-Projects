import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme-provider.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"


export const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>deepeshdev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+777-748-757</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Sharanpur, UP India</p>
                    </div>
                </div>
            </div>
            <form action="" className='contact-right'>
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'  id='name'/>
                <label htmlFor="email">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' id='email' />
                <label htmlFor="message">Write your message here</label>
                <textarea name="" id="message" rows={6}>Enter your message</textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}
