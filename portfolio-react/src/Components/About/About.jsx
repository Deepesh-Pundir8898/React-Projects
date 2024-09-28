import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme-provider.svg"
import Profile_img from "../../assets/profile-image-2.jpg"

export const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={Profile_img} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>React Js</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>JavaScript</p>
                        <hr style={{width:"65%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>Next Js</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='about-achivements'>
            <div className='about-achivement'>
                <h1>1.5+</h1>
                <p>YEARS OF EXPERINCE</p>
            </div>
            <hr />
            <div className='about-achivement'>
                <h1>50+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className='about-achivement'>
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
 )
}
