import React from 'react'
import arrow from '../Assests/arrow.png'
import hand from '../Assests/hand.png'
import hero from '../Assests/hero.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand} alt='hand icon' />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src={arrow} alt='arrow icon' />
        </div>
      </div>
      <div className='hero-right'></div>
      <img src={hero} alt="hero" />
    </div>
  )
}

export default Hero
