import React from 'react';

import styles from './CatalogDefault.module.scss';

import { Link } from 'react-router-dom';

import Kanzas from '../../../assets/Kanzas_card.png';
import Arizona from '../../../assets/Arizona_card.png';
import Indigo from '../../../assets/Indigo_card.png';
import Dakota from '../../../assets/Dakota_card.png';
import Travertine from '../../../assets/Travertine_card.png';

const cardsArr = [
  { name: 'Kansas', cardImg: Kanzas, link: '/catalog/kansas' },
  { name: 'Arizona', cardImg: Arizona, link: '/catalog/arizona' },
  { name: 'Indigo', cardImg: Indigo, link: '/catalog/indigo' },
  { name: 'Dakota', cardImg: Dakota, link: '/catalog/dakota' },
  { name: 'Travertine', cardImg: Travertine, link: '/catalog/travertine' },
];

const CatalogDefault = () => {
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

export default CatalogDefault;
