import React from 'react';

import styles from './PrivateHouses.module.scss';

import house1 from '../../assets/portfolio_1.png';
import house2 from '../../assets/portfolio_13.png';
import house3 from '../../assets/portfolio_3.png';
import house4 from '../../assets/portfolio_4.png';
import house5 from '../../assets/portfolio_10.png';
import house6 from '../../assets/portfolio_6.png';
import house7 from '../../assets/portfolio_7.png';
import house8 from '../../assets/portfolio_12.png';

const projectArr = [
  {
    itemClass: styles.item1,
    image: house1,
    tagName: '#частные дома',
    name: 'Дом в сосновом лесу',
  },
  { itemClass: styles.item2, image: house2, tagName: '#частные дома', name: 'Коммерческий объект' },
  {
    itemClass: styles.item3,
    image: house3,
    tagName: '#частные дома',
    name: 'Дом с черными элементами',
  },
  { itemClass: styles.item4, image: house4, tagName: '#частные дома', name: 'Дом с террасой' },
  { itemClass: styles.item5, image: house5, tagName: '#частные дома', name: 'Дом с террасой' },
  {
    itemClass: styles.item6,
    image: house6,
    tagName: '#частные дома',
    name: 'Дом с дымовой трубой',
  },
  {
    itemClass: styles.item7,
    image: house7,
    tagName: '#частные дома',
    name: 'Дом с дымовой трубой',
  },
  { itemClass: styles.item8, image: house8, tagName: '#частные дома', name: 'Коммерческий объект' },
];

const PrivateHouses = () => {
  return (
    <div className={styles.examples}>
      {projectArr.map(({ itemClass, image, tagName, name }, index) => (
        <div key={index} className={itemClass}>
          <img className={styles.image} src={image} alt="house" />
          <p className={styles.tag}>{tagName}</p>
          <p className={styles.name}>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivateHouses;
