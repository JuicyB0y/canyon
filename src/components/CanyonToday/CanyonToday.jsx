import React from 'react';
import parse from 'html-react-parser';
import styles from './CanyonToday.module.scss';

import More from '../../assets/more.svg';

const numbers = [
  { number: '23', text: 'years of experience' },
  { number: '1000', text: 'clients per year' },
  { number: '182', text: 'm² of production per year' },
  { number: '20', text: 'partners in the Russian <br/> Federation' },
  { number: '4', text: `countries around the world, <br/> where products are exported` },
  { number: '3,6', text: 'million m² of production over 20 years ' },
];

const CanyonToday = () => {
  return (
    <>
      <h3 className={styles.today}>Canyon today</h3>
      <div className={styles.today__wrapper}>
        {numbers.map(({ number, text }) => (
          <div key={text} className={styles.today__item}>
            <div className={styles.today__numbers}>
              <img className={styles.today__image} src={More} alt="more" />
              <p className={styles.today__number}>{number}</p>
            </div>
            <p className={styles.today__text}>{parse(text)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CanyonToday;
