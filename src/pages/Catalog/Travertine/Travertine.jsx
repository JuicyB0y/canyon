import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CatalogDefault/CatalogDefault.module.scss';

import travertine_3 from '../../../assets/travertine_3.png';
import travertine_7 from '../../../assets/travertine_7.png';
import travertine_11 from '../../../assets/travertine_11.png';
import travertine_20 from '../../../assets/travertine_20.png';

const cardsArr = [
  { name: 'Travertine №3', cardImg: travertine_3, link: '3' },
  { name: 'Travertine №7', cardImg: travertine_7, link: '7' },
  { name: 'Travertine №11', cardImg: travertine_11, link: '11' },
  { name: 'Travertine №20', cardImg: travertine_20, link: '20' },
];

const Travertine = () => {
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

export default Travertine;
