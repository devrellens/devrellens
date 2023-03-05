import Image from 'next/image';

import styles from '../styles/Hero.module.css';

import lensLogo from '../public/lens-logo.svg';
import game7Logo from '../public/game7-logo.svg';

const Hero = () => {
  return (
    <>
      <div className={styles['hero-section']}>
        <div className={styles['icon-box']}>
          <Image
            src={lensLogo}
            alt="Lens Logo"
            width={60}
            height={60}
          />
        </div>

        <div className={styles['hero-text-large']}>
          DevRe.l<span className={styles['green-text']}>ens</span>
        </div>

        <div className={styles['icon-box']}>
          <Image
            src={game7Logo}
            alt="Game7 Logo"
            width={60}
            height={60}
          />
        </div>
      </div>

      <div className={styles['hero-text-small']}>
        Developer Relations made better
      </div>
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