import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Wrapper from '../../components/Wrapper/Wrapper';

import styles from './Partnership.module.scss';

import Frontmaster from '../../assets/frontM.png';
import Kamen from '../../assets/KamenM.png';
import Hotwell from '../../assets/HotwellM.png';
import Form from '../../components/Form/Form';
import BottomPart from '../../components/BootomPart/BottomPart';

const dealers = [
  {
    name: 'Фронтмастер',
    text: 'Компания ФРОНТМАСТЕР работает на рынке фасадных и кровельных материалов с 2009 года. Имеется свой собственный монтажный отдел, который занимается квалифицированным монтажом.',
    image: Frontmaster,
  },
  {
    name: 'KamenHouse',
    text: 'Компания KamenHouse продает и доставляет декоративный камень, клинкерную плитку и кирпич, тротуарную плитку и брусчатку, ступени, фасадные термопанели, сопутствующие материалы по Москве и Московской области, а так же в другие регионы России.',
    image: Kamen,
  },
  {
    name: 'Компания HotWell',
    text: 'Компания НоtWell является абсолютным лидером в строительстве домов из СИП панелей. Имеет многолетний опыт на отечественном рынке в представленном сегменте.',
    image: Hotwell,
  },
];

const Partnership = () => {
  return (
    <>
      <Wrapper extraStyles={styles.wrapper}>
        <h1 className={styles.header}>Наши дилеры</h1>
        <div className={styles.dealers}>
          {dealers.map(({ name, text, image }, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.item__text}>
                <h3 className={styles.subheader}>{name}</h3>
                <p className={styles.text}>{text}</p>
              </div>
              <div className={styles.item__logo}>
                <img src={image} alt="logo" />
              </div>
            </div>
          ))}
        </div>

        <Form />
      </Wrapper>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default Partnership;
