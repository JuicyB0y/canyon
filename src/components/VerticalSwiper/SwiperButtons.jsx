import React from 'react';
import { useSwiper } from 'swiper/react';

import styles from './VerticalSwiper.module.scss';

import arr_up from '../../assets/arr_up.png';

const SwiperButtons = ({ isRightActive }) => {
  const swiper = useSwiper();

  const handleChange = () => {
    // changeImage();
    swiper.slidePrev();
  };

  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.buttonWrapper__button} ${styles.prev}`}
        disabled={isRightActive}
        onClick={handleChange}>
        <img src={arr_up} alt="arrow" />
      </button>
      <button
        className={`${styles.buttonWrapper__button} ${styles.next}`}
        disabled={isRightActive}
        onClick={() => swiper.slideNext()}>
        <img src={arr_up} alt="arrow" />
      </button>
    </div>
  );
};

export default SwiperButtons;
