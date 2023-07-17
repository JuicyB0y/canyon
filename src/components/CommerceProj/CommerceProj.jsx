import React from 'react';

import house1 from '../../assets/portfolio_2.png';
import house2 from '../../assets/portfolio_8.png';

import styles from './CommerceProj.module.scss';

const CommerceProj = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.item}>
        <img className={styles.image} src={house1} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом в сосновом лесу</p>
      </div>

      <div className={styles.item}>
        <img className={styles.image} src={house2} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом в сосновом лесу</p>
      </div>
    </div>
  );
};

export default CommerceProj;
