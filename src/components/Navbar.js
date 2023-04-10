import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.screenY >= 100)
    setColor(true);
    else
    setColor(false);
  }

  window.addEventListener('scroll',changeColor);

  return (
    <nav className={color ? 'header header-bg': 'header'}>
        <Link to='/'><h1>Portfolio</h1></Link>
        <ul className={clicked ? 'nav-options active':'nav-options'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
        </ul>     
        <div className='hamburger' onClick={handleClick}>
          {clicked ? (<FaTimes  size={20}/>): (<FaBars  size={20}/>)}  
        </div>
    </nav>
  )
}

export default Navbar;