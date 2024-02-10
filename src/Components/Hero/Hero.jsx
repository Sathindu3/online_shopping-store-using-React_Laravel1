import React from 'react'
import './Hero.css'
import hand_icon from './waving-hand.png'
import arrow_icon from './arrow.png'
import hero_icon from './model.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only</h2>
        <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>for everybody</p>
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
