import React from 'react';

import styles from './CatalogNavPart.module.scss';

import Arrow from '../../../assets/arrow_up.svg';

const CatalogNavPart = () => {
  return (
    <aside className={styles.parameters}>
      <div className={styles.collection}>
        <div className={styles.collection__nameWrapper}>
          <h3 className={styles.collection__name}>collection</h3>
          <img className={styles.collection__img} src={Arrow} alt="arrow" />
        </div>

        <div className={styles.labelWrapper}>
          <label className={styles.container}>
            Arizona
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            Dakota
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            Indigo
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            Kansas
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            Travertine
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>

      {/* <div className={styles.materials}>
        <div className={styles.collection__nameWrapper}>
          <h3 className={styles.collection__name}>related materials</h3>
          <img className={styles.collection__img} src={Arrow} alt="arrow" />
        </div>

        <div className={styles.labelWrapper}>
          <label className={styles.container}>
            NEXT ANGLE
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            FRAMING IN 3 AND 5 BRICKS
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            INTERIORS
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            COUNTRY ANGLE
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div> */}
    </aside>
  );
};

export default CatalogNavPart;
{
  /* <BottomPart fromTop={styles.fromTop} /> */
}
