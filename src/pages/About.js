import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" desc="I'm a friendly Web Developer."/>
      <Footer />
    </div>
  )
};
