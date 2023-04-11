import React from 'react';
import './Footer.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhoneSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className='contact-details'>
            <div className='contact-me'>
                <FaHome size={30}/> 
                <h4>317 D, Scheme No 51, Indore, M.P, India</h4>
            </div>
            <div className='contact-me'>
                <FaPhoneSquare size={30}/> 
                <h4>+918839237805</h4>
            </div>
            <div className='contact-me'>
                <FaMailBulk size={30}/> 
                <h4>dev1999.2011vi@gmail.com</h4>
            </div>
        </div>
        <div className='about-me'>
            <div><h4>About Me</h4></div>
            <div className='desc'><p>This is me Devendra Yadav. Web Developer, Gamer and Tech enthusiast.  </p></div>
            <div>
                <a href='https://www.linkedin.com/in/devendra-yadav-80a3a61a4/'><FaLinkedin size={30} className='media-icon'/></a>
                <a href='https://github.com/dev1999vi'><FaGithub size={30} className='media-icon'/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;