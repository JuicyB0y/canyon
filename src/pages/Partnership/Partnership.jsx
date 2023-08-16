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
    name: 'FRONTMASTER',
    text: 'The company FRONTMASTER has been operating in the market of facade and roofing materials since 2009. It has its own installation department, which deals with qualified installation.',
    image: Frontmaster,
  },
  {
    name: 'KamenHouse',
    text: 'The company KamenHouse sells and delivers decorative stone, clinker tiles and bricks, paving slabs and cobblestones, steps, facade thermal panels, accompanying materials in Moscow and the Moscow region, as well as in other regions of Russia.',
    image: Kamen,
  },
  {
    name: 'HotWell',
    text: 'The company HotWell is an absolute leader in the construction of houses from SIP panels. It has many years of experience in the domestic market in the presented segment.',
    image: Hotwell,
  },
];

const Partnership = () => {
  return (
    <>
      <Wrapper extraStyles={styles.wrapper}>
        <h1 className={styles.header}>Our dealers</h1>
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
