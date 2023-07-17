import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CatalogDefault/CatalogDefault.module.scss';

import Dakota_3 from '../../../assets/dakota_3.png';
import Dakota_61 from '../../../assets/dakota_61.png';
import Dakota_62 from '../../../assets/dakota_62.png';
import Dakota_63 from '../../../assets/dakota_63.png';
import Dakota_77 from '../../../assets/dakota_77.png';

const cardsArr = [
  { name: 'Dakota №3', cardImg: Dakota_3, link: '3' },
  { name: 'Dakota №61', cardImg: Dakota_61, link: '61' },
  { name: 'Dakota №62', cardImg: Dakota_62, link: '62' },
  { name: 'Dakota №63', cardImg: Dakota_63, link: '63' },
  { name: 'Dakota №77', cardImg: Dakota_77, link: '77' },
];

const Dakota = () => {
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

export default Dakota;
