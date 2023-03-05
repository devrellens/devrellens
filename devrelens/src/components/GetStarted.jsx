import React from 'react';
import './GetStarted.css';
import started from '../assets/started-btn.svg';

const GetStarted = () => {
  return (
    <>
      <div className='started-section'>
        <div className='started-text-large'>
          🌿 Take a <span className='green-text'>QUEST</span> & show your <span className='green-text'>BEST</span> 🌿
        </div>

        <div>
          <a href="https://lenster.xyz/">
            <img src={started} alt="started-btn"/>
          </a>
        </div>
      </div>

<div className='box-section'>

      <div className="box mt-1">
        <div className="box-text">
          information
        </div>
      </div>
      
      <div className="box mt-3">
        <div className="box-text">
          powerd by Game7
        </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
