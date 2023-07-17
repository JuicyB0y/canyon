import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CatalogDefault/CatalogDefault.module.scss';

import arizona_3 from '../../../assets/arizona_3.png';
import arizona_63 from '../../../assets/arizona_63.png';
import arizona_68 from '../../../assets/arizona_68.png';
import arizona_69 from '../../../assets/arizona_69.png';

const cardsArr = [
  { name: 'Arizona №3', cardImg: arizona_3, link: '3' },
  { name: 'Arizona №63', cardImg: arizona_63, link: '63' },
  { name: 'Arizona №68', cardImg: arizona_68, link: '68' },
  { name: 'Arizona №69', cardImg: arizona_69, link: '69' },
];

const Arizona = () => {
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

export default Arizona;
