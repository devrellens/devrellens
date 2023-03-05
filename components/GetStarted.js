import Image from 'next/image';
import styles from '../styles/GetStarted.module.css';
import Link from 'next/link'



const GetStarted = () => {
  return (
    <>
      <div className={styles['started-section']}>
        <div className={styles['started-text-large']}>
          🌿 Take a <span className={styles['green-text']}>QUEST</span> & show your <span className={styles['green-text']}>BEST</span> 🌿
        </div>

        <div>
          <Link href="/questions">
            <Image src="started-btn.svg" alt="started-btn" width={120} height={40} />
          </Link>
          <Link href="/share">
            Sharing Task
          </Link>
          ||  
          <Link href="/lens">
            Lens Profiles
          </Link>
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

