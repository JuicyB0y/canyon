import React from 'react';

import house1 from '../../assets/portfolio_8.png';
import house2 from '../../assets/portfolio_2.png';

import styles from './CommerceProj.module.scss';

const CommerceProj = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.item}>
        <img className={styles.image} src={house1} alt="house" />
        <p className={styles.tag}>#commercial object</p>
        <p className={styles.name}>House for rent</p>
      </div>

      <div className={styles.item}>
        <img className={styles.image} src={house2} alt="house" />
        <p className={styles.tag}>#commercial object</p>
        <p className={styles.name}>Mall with landscaping and parking</p>
      </div>
    </div>
  );
};

export default CommerceProj;
