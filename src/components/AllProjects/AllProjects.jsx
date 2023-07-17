import React from 'react';

import house1 from '../../assets/portfolio_1.png';
import house2 from '../../assets/portfolio_2.png';
import house3 from '../../assets/portfolio_3.png';
import house4 from '../../assets/portfolio_4.png';
import house5 from '../../assets/portfolio_5.png';
import house6 from '../../assets/portfolio_6.png';
import house7 from '../../assets/portfolio_7.png';
import house8 from '../../assets/portfolio_8.png';
import house9 from '../../assets/portfolio_9.png';
import house10 from '../../assets/portfolio_10.png';
import house11 from '../../assets/portfolio_11.png';
import house12 from '../../assets/portfolio_12.png';
import house13 from '../../assets/portfolio_13.png';
import house14 from '../../assets/portfolio_14.png';

import styles from './AllProjexts.module.scss';

const AllProjects = () => {
  return (
    <div className={styles.examples}>
      <div className={styles.item1}>
        <img className={styles.image} src={house1} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом в сосновом лесу</p>
      </div>

      <div className={styles.item2}>
        <img className={styles.image} src={house2} alt="house" />
        <p className={styles.tag}>#торговые центры</p>
        <p className={styles.name}>ТЦ с озеленением и парковкой</p>
      </div>

      <div className={styles.item3}>
        <img className={styles.image} src={house3} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с черными элементами</p>
      </div>

      <div className={styles.item4}>
        <img className={styles.image} src={house4} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с террасой</p>
      </div>

      <div className={styles.item5}>
        <img className={styles.image} src={house5} alt="house" />
        <p className={styles.tag}>#??????</p>
        <p className={styles.name}>Коммерческий объект</p>
      </div>

      <div className={styles.item6}>
        <img className={styles.image} src={house6} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с дымовой трубой</p>
      </div>

      <div className={styles.item7}>
        <img className={styles.image} src={house7} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с дымовой трубой</p>
      </div>

      <div className={styles.item8}>
        <img className={styles.image} src={house8} alt="house" />
        <p className={styles.tag}>#торговые центры</p>
        <p className={styles.name}>ТЦ с озеленением и парковкой</p>
      </div>

      <div className={styles.item9}>
        <img className={styles.image} src={house9} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с черными элементами</p>
      </div>

      <div className={styles.item10}>
        <img className={styles.image} src={house10} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с террасой</p>
      </div>

      <div className={styles.item11}>
        <img className={styles.image} src={house11} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом в сосновом лесу</p>
      </div>

      <div className={styles.item12}>
        <img className={styles.image} src={house12} alt="house" />
        <p className={styles.tag}>#??????</p>
        <p className={styles.name}>Коммерческий объект</p>
      </div>

      <div className={styles.item13}>
        <img className={styles.image} src={house13} alt="house" />
        <p className={styles.tag}>#??????</p>
        <p className={styles.name}>Коммерческий объект</p>
      </div>

      <div className={styles.item14}>
        <img className={styles.image} src={house14} alt="house" />
        <p className={styles.tag}>#частные дома</p>
        <p className={styles.name}>Дом с дымовой трубой</p>
      </div>
    </div>
  );
};

export default AllProjects;
