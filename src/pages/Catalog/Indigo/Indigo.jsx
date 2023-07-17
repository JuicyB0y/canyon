import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CatalogDefault/CatalogDefault.module.scss';

import indigo_3 from '../../../assets/indigo_3.png';
import indigo_68 from '../../../assets/indigo_68.png';
import indigo_69 from '../../../assets/indigo_69.png';

const cardsArr = [
  { name: 'Indigo №3', cardImg: indigo_3, link: '3' },
  { name: 'Indigo №68', cardImg: indigo_68, link: '68' },
  { name: 'Indigo №69', cardImg: indigo_69, link: '69' },
];

const Indigo = () => {
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

export default Indigo;
