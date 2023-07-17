import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

import styles from './Home.module.scss';
import Wrapper from '../../components/Wrapper/Wrapper';

import FrontMaster from '../../assets/masster.svg';
import Kamen from '../../assets/kamen.svg';
import Good from '../../assets/good.svg';
import Hotwell from '../../assets/hotwell.svg';
import Open from '../../assets/open”.svg';
import Close from '../../assets/close“.svg';

import Kanzas from '../../assets/Kanzas.png';
import Arizona from '../../assets/Arizona.png';
import Indigo from '../../assets/Indigo.png';
import Dacota from '../../assets/Dacota.png';

import Quality from '../../assets/quality.svg';
import Imitation from '../../assets/imitation.svg';
import Fire from '../../assets/fire.svg';
import Temperature from '../../assets/temperature.svg';
import Recycle from '../../assets/recycle.svg';
import Mounting from '../../assets/mounting.svg';
import More from '../../assets/more.svg';

import BottomPart from '../../components/BootomPart/BottomPart';
import { Link } from 'react-router-dom';
import CanyonToday from '../../components/CanyonToday/CanyonToday';

const samples = [
  { sampleName: 'Kanzas', image: Kanzas },
  { sampleName: 'Arizona', image: Arizona },
  { sampleName: 'Indigo', image: Indigo },
  { sampleName: 'Dacota', image: Dacota },
];

const benefits = [
  {
    image: Quality,
    title: 'European quality',
    text: 'We meet European quality standards. We produce on the territory of the European Union.',
  },
  {
    image: Imitation,
    title: 'Imitation natural textures',
    text: 'Products as naturally imitating natural textures and surfaces as possible.',
  },
  {
    image: Temperature,
    title: 'Temperature resistance',
    text: 'Resistant to changing climate',
  },
  {
    image: Fire,
    title: 'Fire Safety',
    text: 'All products meet a high level of fire safety, flammability class NG.',
  },
  {
    image: Recycle,
    title: 'Recycle',
    text: '70% of the materials used are recycled.',
  },
  {
    image: Mounting,
    title: 'Mounting',
    text: 'Quick installation on its own subsystem at any time of year and on any surface.',
  },
];

const numbers = [
  { number: '23', text: 'лет опыта' },
  { number: '1000', text: 'клиентов в год' },
  { number: '182', text: 'тысяч м² производства в год' },
  { number: '20', text: 'партнеров в РФ' },
  { number: '4', text: `стран мира, куда экспортируется продукция` },
  { number: '3,6', text: 'млн м² производства за 20 лет ' },
];

const Home = () => {
  return (
    <>
      <section className={styles.facades}>
        <Wrapper extraStyles={styles.extraStyles}>
          <h1 className={styles.header}>
            Reliable facades <br />
            <span className={styles.header__little}>for your home</span>
          </h1>
          <div className={styles.buttons}>
            <Link className={styles.buttons__catalog} to="/catalog">
              Catalog
            </Link>
            <a className={styles.buttons__buy} href="#">
              Where to buy?
            </a>
          </div>

          <div className={styles.sponsors}>
            <img src={FrontMaster} alt="sponsor" />
            <img src={Kamen} alt="sponsor" />
            <img src={Good} alt="sponsor" />
            <img src={Hotwell} alt="sponsor" />
          </div>
        </Wrapper>
      </section>

      <section className={styles.mission}>
        <Wrapper extraStyles={styles.wrapper_mission}>
          <img src={Open} className={styles.mission__open} alt="open" />
          <img src={Close} className={styles.mission__close} alt="close" />
          <p className={styles.mission__first}>Canyon's mission</p>
          <p className={styles.mission__second}>
            Canyon - uniqueness based on years of experience. <br />{' '}
            <span>
              One of the Russian leaders in the production of facade <br /> solutions.
            </span>
          </p>
        </Wrapper>
      </section>

      <section className={styles.texture}>
        <Wrapper extraStyles={styles.texture__wrapper}>
          <h3 className={styles.texture__header}>Choose your texture</h3>

          {samples.map(({ sampleName, image }) => (
            <div key={sampleName} className={styles.kanzas}>
              <img className={styles.kanzas__img} src={image} alt="kanzas" />
              <p>Kanzas</p>
            </div>
          ))}
        </Wrapper>
      </section>

      <section className={styles.benefits}>
        <Wrapper extraStyles={styles.benefits__wrapper}>
          <h3 className={styles.benefits__header}>Benefits</h3>

          <div className={styles.benefits__cardWrapper}>
            {benefits.map(({ image, title, text }) => (
              <div key={title} className={styles.benefits__card}>
                <img className={styles.benefits__image} src={image} alt={title} />
                <div className={styles.benefits__info}>
                  <p className={styles.benefits__subtitle}>{title}</p>
                  <p className={styles.benefits__text}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <CanyonToday />
        </Wrapper>
      </section>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default Home;
