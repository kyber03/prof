import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profimg.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span>I'm Ubaidullah</span> , Full stack developer based in Chennai</h1>
      <p>Having Front end developer experience with 3 years</p>
      <div className="hero-action">
        <div className="hero-connect">Connect</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
