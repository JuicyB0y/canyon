import React from 'react';

import styles from './Catalog.module.scss';
import Wrapper from '../../components/Wrapper/Wrapper';

import Arrow from '../../assets/arrow_up.svg';
import { Link } from 'react-router-dom';

import Kanzas from '../../assets/Kanzas_card.png';
import Arizona from '../../assets/Arizona_card.png';
import Indigo from '../../assets/Indigo_card.png';
import Dakota from '../../assets/Dakota_card.png';
import Travertine from '../../assets/Travertine_card.png';
import BottomPart from '../../components/BootomPart/BottomPart';

const cardsArr = [
  { name: 'Kansas', cardImg: Kanzas },
  { name: 'Arizona', cardImg: Arizona },
  { name: 'Indigo', cardImg: Indigo },
  { name: 'Dakota', cardImg: Dakota },
  { name: 'Travertine', cardImg: Travertine },
];

const Catalog = () => {
  return (
    <>
      <Wrapper extraStyles={styles.extraStyles}>
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

          <div className={styles.materials}>
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
          </div>
        </aside>

        <div className={styles.cards}>
          {cardsArr.map(({ name, cardImg }, index) => (
            <Link key={index} to="#" className={styles.card}>
              <div className={styles.card__imageWrapper}>
                <img className={styles.card__image} src={cardImg} alt="image" />
              </div>
              <p className={styles.card__name}>{name}</p>
            </Link>
          ))}
        </div>
      </Wrapper>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default Catalog;
