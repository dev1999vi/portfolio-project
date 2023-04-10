import React from 'react';
import './HeroImg.css';
import hero from '../assets/hero.jpg'

export const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro' src={hero} alt="Intro" />
        </div>
    </div>
  )
}
