import React from 'react';
import styles from './CanyonToday.module.scss';

import More from '../../assets/more.svg';

const numbers = [
  { number: '23', text: 'лет опыта' },
  { number: '1000', text: 'клиентов в год' },
  { number: '182', text: 'тысяч м² производства в год' },
  { number: '20', text: 'партнеров в РФ' },
  { number: '4', text: `стран мира, куда экспортируется продукция` },
  { number: '3,6', text: 'млн м² производства за 20 лет ' },
];

const CanyonToday = () => {
  return (
    <>
      <h3 className={styles.today}>Canyon сегодня</h3>
      <div className={styles.today__wrapper}>
        {numbers.map(({ number, text }) => (
          <div key={text} className={styles.today__item}>
            <div className={styles.today__numbers}>
              <img className={styles.today__image} src={More} alt="more" />
              <p className={styles.today__number}>{number}</p>
            </div>
            <p className={styles.today__text}>{text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CanyonToday;
