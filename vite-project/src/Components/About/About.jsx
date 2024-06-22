import React from 'react'
import './About.css'
import themepattern from '../../assets/theme_pattern.svg'
import aboutprof from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={themepattern} alt="" />
      </div>


      <div className="about-sec">
        <div className="about-left">
            <img src={aboutprof} alt="" />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>Experience developer passion for coding</p>
                <p>Experience developer passion for coding</p>
            </div>

            <div className="skills">
                <div className="abt-skill">
                    <p>HTML && CSS</p> <hr style={{width:"60%"}}/>
                </div>
                <div className="abt-skill">
                    <p>React Js</p> <hr style={{width:"65%"}}/>
                </div>
                <div className="abt-skill">
                    <p>Javascript</p> <hr style={{width:"70%"}}/>
                </div>
                <div className="abt-skill">
                    <p>SQl && Power BI</p> <hr style={{width:"90%"}}/>
                </div>
            </div>
        </div>
       </div>

      <div className="achievements">
        <div className="achievement">
            <h1>2+</h1>
            <p>Years of experience</p>
        </div>
        <hr />
        <div className="achievement">
            <h1>10+</h1>
            <p>Projects completed</p>
        </div>
        <hr />
        <div className="achievement">
            <h1>10+</h1>
            <p>Projects completed</p>
        </div>


      </div>
    </div>
  )
}

export default About
