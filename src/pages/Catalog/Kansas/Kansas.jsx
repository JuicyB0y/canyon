import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CatalogDefault/CatalogDefault.module.scss';

import Kanzas_3 from '../../../assets/kansas_3.png';
import Kanzas_63 from '../../../assets/kansas_63.png';
import Kanzas_68 from '../../../assets/kansas_68.png';
import Kanzas_69 from '../../../assets/kansas_69.png';

const cardsArr = [
  { name: 'Kansas №3', cardImg: Kanzas_3, link: '3' },
  { name: 'Kansas №63', cardImg: Kanzas_63, link: '63' },
  { name: 'Kansas №68', cardImg: Kanzas_68, link: '68' },
  { name: 'Kansas №69', cardImg: Kanzas_69, link: '69' },
];

const Kansas = () => {
  return (
    <div className={styles.cards}>
      {cardsArr.map(({ name, cardImg, link }, index) => (
        <Link key={index} to={link} className={styles.card}>
          <div className={styles.card__imageWrapper}>
            <img className={styles.card__image} src={cardImg} alt="image" />
          </div>
          <p className={styles.card__name}>{name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Kansas;
