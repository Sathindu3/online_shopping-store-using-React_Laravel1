import React from 'react'
import './Hero.css'
import hand_icon from './waving-hand.png'
import arrow_icon from './arrow.png'
import hero_icon from './model.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Visit the</h2>
        <div>
            <div className="hero-hand-icon">
                            
            </div>
            <p>Most Popular Online Shopping  </p>
            <p> Store In Sri Lanka</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      
      <div className="hero-right">
        <img src={hero_icon} alt="" />

      </div>

    </div>
  )
}

export default Hero
