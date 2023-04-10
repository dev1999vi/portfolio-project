import React from 'react';
import './HeroImg.css';
import hero from '../assets/hero.png'
import { Link } from 'react-router-dom';

export const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro' src={hero} alt="Intro" />
        </div>
        <div className='content'>
            <p>I'm a Freelancer</p>
            <h1>React and Ruby On Rails Developer</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
