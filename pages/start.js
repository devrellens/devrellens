import Image from 'next/image';
import styles from '../styles/GetStarted.module.css';



const GetStarted = () => {
  return (
    <>
      <div className={styles['started-section']}>
        <div className={styles['started-text-large']}>
          🌿 Take a <span className={styles['green-text']}>QUEST</span> & show your <span className={styles['green-text']}>BEST</span> 🌿
        </div>

        <div>
          <a href="https://lenster.xyz/">
            <Image src="/images/started-btn.png" alt="started-btn" width={120} height={40} />
          </a>
        </div>
      </div>

      <div className={styles['box-section']}>
        <div className={'box' + ' mt-1'}>
          <div className={styles['box-text']}>
            information
          </div>
        </div>

        <div className={'box' + ' mt-3'}>
          <div className={styles['box-text']}>
            powered by Game7
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
