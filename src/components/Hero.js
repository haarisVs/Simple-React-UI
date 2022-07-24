import React from 'react'
import HeroImgSrc from '../images/Hero.png'

const Hero = () => {
  return (
    <section className='hero'>
        <img src={HeroImgSrc} className="hero-img" alt=""/>
        <h1 className='hero-heading'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive actazivities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero