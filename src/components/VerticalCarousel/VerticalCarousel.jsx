import React, { useState } from 'react';
import cn from 'classnames';

import styles from './VerticalCarousel.module.scss';

import arr_up from '../../assets/arr_up.png';

const VerticalCarousel = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 252;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
          return data.length - 1;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <section className={styles.outer__container}>
      <div className={styles.carousel__wrapper}>
        <div className={styles.carousel}>
          <div className={styles.leading_text}>
            <p>{leadingText}</p>
          </div>
          <div className={styles.slides}>
            <div className={styles.carousel_inner}>
              {data.map((item, i) => (
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`${styles.carousel_item} ${activeIndex === i ? styles.active : ''} ${
                    Math.abs(determinePlacement(i)) <= visibleStyleThreshold ? styles.visible : ''
                  }`}
                  key={item.id}
                  style={{ transform: `translateY(${determinePlacement(i)}px)` }}>
                  {item.introline}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={`${styles.carousel_button} ${styles.prev}`}
            onClick={() => handleClick('prev')}>
            <img src={arr_up} alt="arrow" />
          </button>

          <button
            type="button"
            className={`${styles.carousel_button} ${styles.next}`}
            onClick={() => handleClick('next')}>
            <img src={arr_up} alt="arrow" />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <img src={data[activeIndex].content.image} alt={data[activeIndex].content.introline} />
        <p>{data[activeIndex].content.copy}</p>
      </div>
    </section>
  );
};

export default VerticalCarousel;
