import React from 'react';
import './Hero.css';
import spin_lens from '../assets/lens-logo.svg';
import spin_game7 from '../assets/game7-logo.svg';

const Hero = () => {
  

  return (
    <>
    <div className='hero-section'>
    
    <div className='icon-box'>
        <img
            className='hero-icon'
            src={spin_lens}
            alt="lens-logo"
        />
      </div>

      <div className='hero-text-large'>
        DevRe.l<span className='green-text'>ens</span>
      </div>

      <div className='icon-box'>
        <img
            className='hero-icon'
            src={spin_game7}
            alt="game7-logo"
        />
      </div>

      
    </div>

    <div className='hero-text-small'>
        Developer Relations made better
    </div>
    <div></div>
    </>
  );
};

export default Hero;

/*
<div className='loading-box'>
        <img
            className='loading-icon'
            src={loading_icon}
            alt="wait_screen"
        />
      </div>*/