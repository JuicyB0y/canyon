import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import parse from 'html-react-parser';

import styles from './PanelPagePrototype.module.scss';

import prevBtn from '../../assets/arrow_left.svg';
import nextBtn from '../../assets/arrow_right.svg';
import circle_bright from '../../assets/circle-bright.svg';
import circle_dark from '../../assets/circle-dark.svg';
import circle_gold from '../../assets/circle-gold.svg';
import circle_grey from '../../assets/circle-grey.svg';
import check_mark from '../../assets/check_mark.svg';
import Kanzas_3 from '../../assets/kansas_3.png';
import Kanzas_63 from '../../assets/kansas_63.png';
import Kanzas_68 from '../../assets/kansas_68.png';
import Kanzas_69 from '../../assets/kansas_69.png';
import bracing from '../../assets/bracing.png';
import BottomPart from '../BootomPart/BottomPart';
import Kansas_bg from '../../assets/kansas_68-bg.png';

import circleDakota_1 from '../../assets/dakota_circle_1.svg';
import circleDakota_2 from '../../assets/dakota_circle_2.svg';
import circleDakota_3 from '../../assets/dakota_circle_3.svg';
import circleDakota_4 from '../../assets/dakota_circle_4.svg';
import circleDakota_5 from '../../assets/dakota_circle_5.svg';
import Dakota_3 from '../../assets/dakota_3.png';
import Dakota_61 from '../../assets/dakota_61.png';
import Dakota_62 from '../../assets/dakota_62.png';
import Dakota_63 from '../../assets/dakota_63.png';
import Dakota_77 from '../../assets/dakota_77.png';

import circleArizona_3 from '../../assets/circleArizona_3.svg';
import circleArizona_63 from '../../assets/circleArizona_63.svg';
import circleArizona_68 from '../../assets/circleArizona_68.svg';
import circleArizona_69 from '../../assets/circleArizona_69.svg';
import arizona_3 from '../../assets/arizona_3.png';
import arizona_63 from '../../assets/arizona_63.png';
import arizona_68 from '../../assets/arizona_68.png';
import arizona_69 from '../../assets/arizona_69.png';

import circleIndigo_3 from '../../assets/circleIndigo_3.svg';
import circleIndigo_68 from '../../assets/circleIndigo_68.svg';
import circleIndigo_69 from '../../assets/circleIndigo_69.svg';
import indigo_3 from '../../assets/indigo_3.png';
import indigo_68 from '../../assets/indigo_68.png';
import indigo_69 from '../../assets/indigo_69.png';

import circleTravertine_3 from '../../assets/circleTravertine_3.svg';
import circleTravertine_7 from '../../assets/circleTravertine_7.svg';
import circleTravertine_11 from '../../assets/circleTravertine_11.svg';
import circleTravertine_20 from '../../assets/circleTravertine_20.svg';
import travertine_3 from '../../assets/travertine_3.png';
import travertine_7 from '../../assets/travertine_7.png';
import travertine_11 from '../../assets/travertine_11.png';
import travertine_20 from '../../assets/travertine_20.png';

const colorsArrKansas = [
  { img: circle_bright, imgStyles: styles.info__circleBright },
  { img: circle_dark, imgStyles: styles.info__circleDark },
  { img: circle_gold, imgStyles: styles.info__circleGold },
  { img: circle_grey, imgStyles: styles.info__circleGray },
];

const colorsArrDakota = [
  { img: circleDakota_1, imgStyles: styles.info__circleDakota_1 },
  { img: circleDakota_2, imgStyles: styles.info__circleDakota_2 },
  { img: circleDakota_3, imgStyles: styles.info__circleDakota_3 },
  { img: circleDakota_4, imgStyles: styles.info__circleDakota_4 },
  { img: circleDakota_5, imgStyles: styles.info__circleDakota_5 },
];

const colorsArrArizona = [
  { img: circleArizona_3, imgStyles: styles.info__circleArizona_3 },
  { img: circleArizona_63, imgStyles: styles.info__circleArizona_63 },
  { img: circleArizona_68, imgStyles: styles.info__circleArizona_68 },
  { img: circleArizona_69, imgStyles: styles.info__circleArizona_69 },
];

const colorsArrIndigo = [
  { img: circleIndigo_3, imgStyles: styles.info__circleIndigo_3 },
  { img: circleIndigo_68, imgStyles: styles.info__circleIndigo_68 },
  { img: circleIndigo_69, imgStyles: styles.info__circleIndigo_69 },
];

const colorsArrTravertine = [
  { img: circleTravertine_3, imgStyles: styles.info__circleTravertine_3 },
  { img: circleTravertine_7, imgStyles: styles.info__circleTravertine_7 },
  { img: circleTravertine_11, imgStyles: styles.info__circleTravertine_11 },
  { img: circleTravertine_20, imgStyles: styles.info__circleTravertine_20 },
];

const cardsArrKansas = [
  { name: 'Kansas №3', cardImg: Kanzas_3, link: '3' },
  { name: 'Kansas №63', cardImg: Kanzas_63, link: '63' },
  { name: 'Kansas №68', cardImg: Kanzas_68, link: '68' },
  { name: 'Kansas №69', cardImg: Kanzas_69, link: '69' },
];

const cardsArrDakota = [
  { name: 'Dakota №3', cardImg: Dakota_3, link: '3' },
  { name: 'Dakota №61', cardImg: Dakota_61, link: '61' },
  { name: 'Dakota №62', cardImg: Dakota_62, link: '62' },
  { name: 'Dakota №63', cardImg: Dakota_63, link: '63' },
  { name: 'Dakota №77', cardImg: Dakota_77, link: '77' },
];

const cardsArrArizona = [
  { name: 'Arizona №3', cardImg: arizona_3, link: '3' },
  { name: 'Arizona №63', cardImg: arizona_63, link: '63' },
  { name: 'Arizona №68', cardImg: arizona_68, link: '68' },
  { name: 'Arizona №69', cardImg: arizona_69, link: '69' },
];

const cardsArrIndigo = [
  { name: 'Indigo №3', cardImg: indigo_3, link: '3' },
  { name: 'Indigo №68', cardImg: indigo_68, link: '68' },
  { name: 'Indigo №69', cardImg: indigo_69, link: '69' },
];

const cardsArrTravertine = [
  { name: 'Travertine №3', cardImg: travertine_3, link: '3' },
  { name: 'Travertine №7', cardImg: travertine_7, link: '7' },
  { name: 'Travertine №11', cardImg: travertine_11, link: '11' },
  { name: 'Travertine №20', cardImg: travertine_20, link: '20' },
];

const compoundArrKansas = [
  { name: 'RIGHT SIDE OF THE COMPOUND', price: '$$$$', image: bracing },
  { name: 'LEFT SIDE OF THE COMPOUND', price: '$$$$', image: bracing },
  { name: 'PROTRUDING BRICKS', price: '$$$$', image: bracing },
  { name: 'NEXT ANGLE', price: '$$$$', image: bracing },
];

const collectionKansas = [
  { text: 'High strength', number: '1' },
  { text: `Resistant to burnout <br /> and weathering`, number: '2' },
  { text: `Suitable for climatic <br /> conditions`, number: '3' },
  { text: `No tendency for mould <br /> to form`, number: '4' },
];

const collectionDakota = [
  { text: `Environmentally <br /> friendly and harmless <br /> to humans`, number: '1' },
  { text: `Longevity`, number: '2' },
  { text: `Wind resistance`, number: '3' },
  {
    text: `Resistant to <br /> temperature <br /> fluctuations, humidity, <br /> precipitation   `,
    number: '4',
  },
];

const collectionArizona = [
  { text: `Frost resistance`, number: '1' },
  { text: `Resistance to burnout`, number: '2' },
  { text: `Resistance to mold <br/> and mildew`, number: '3' },
  { text: `Eco-friendly`, number: '4' },
];

const collectionIndigo = [
  { text: `Durability <br/> - the elements do not break <br/> or delaminate`, number: '1' },
  {
    text: `Resistance to <br/> temperature <br/> fluctuations, moisture, <br/> UV radiation`,
    number: '2',
  },
  { text: `Low weight`, number: '3' },
  { text: `Longevity`, number: '4' },
];

const collectionTravertine = [
  { text: `Environmentally <br/> friendly and harmless <br/> to humans`, number: '1' },
  { text: `Longevity`, number: '2' },
  { text: `Wind resistance`, number: '3' },
  {
    text: `Resistant to <br/> temperature <br/> fluctuations, humidity, <br/> precipitation   `,
    number: '4',
  },
];

const PanelPagePrototype = ({
  mainImg,
  name,
  aboutText = '',
  activeColor,
  bgImage,
  slabType,
  collection = '',
  benefitText = '',
}) => {
  const moduleContentFunc = (slabType) => {
    switch (slabType) {
      case 'kansas':
        return [colorsArrKansas, cardsArrKansas, compoundArrKansas, collectionKansas];
      case 'dakota':
        return [colorsArrDakota, cardsArrDakota, compoundArrKansas, collectionDakota];
      case 'arizona':
        return [colorsArrArizona, cardsArrArizona, compoundArrKansas, collectionArizona];
      case 'indigo':
        return [colorsArrIndigo, cardsArrIndigo, compoundArrKansas, collectionIndigo];
      case 'travertine':
        return [colorsArrTravertine, cardsArrTravertine, compoundArrKansas, collectionTravertine];
      default:
        return [];
    }
  };

  // const collectionArrFunc = (slav)

  const inlineStyles = (bgImage) => {
    if (bgImage === undefined) {
      return { background: 'rgba(0, 0, 0, 0.46)' };
    } else {
      return {
        background: `url(${bgImage}) center center/cover no-repeat`,
      };
    }
  };

  return (
    <>
      <Wrapper extraStyles={styles.extraStyles}>
        <div className={styles.description}>
          <div className={styles.slider}>
            {mainImg ? (
              <img className={styles.slider__image} src={mainImg} alt="image" />
            ) : (
              <div className={styles.slider__grey}></div>
            )}

            <div className={styles.slider__panel}>
              <p className={styles.slider__hashtag}>#private houses</p>
              <div className={styles.slider__buttons}>
                <button className={styles.slider__prevButton}>
                  <img className={styles.slider__prevImg} src={prevBtn} alt="button" />
                </button>
                <button className={styles.slider__nextButton}>
                  <img className={styles.slider__nextImg} src={prevBtn} alt="button" />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4 className={styles.info__hashtag}>#brick panels</h4>
            <h1 className={styles.info__header}>{name}</h1>
            <p className={styles.info__text}>{parse(aboutText)}</p>
            <div className={styles.info__butttons}>
              <button className={styles.info__costing}>Costing</button>
              <button className={styles.info__price}>40 € per m²</button>
            </div>
            <hr />
            <div className={styles.info__colors}>
              <p className={styles.info__name}>Colours</p>
              <div className={styles.info__circles}>
                {moduleContentFunc(slabType)[0].map(({ img, imgStyles }, index) => (
                  <div key={index} className={styles.info__circleWrapper}>
                    <img
                      className={`${imgStyles} ${styles.info__circleBorder}`}
                      src={img}
                      alt="color"
                    />
                    {activeColor === index && (
                      <img className={styles.info__check} src={check_mark} alt="check_mark" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className={styles.info__parameters}>
              <div className={styles.info__parametersName}>
                <p>Size:</p>
                <p>Panel area:</p>
                <p>Weight 1 m2:</p>
                <p>Quantity per m2:</p>
                <p>Quantity per box:</p>
                <p>Overlapping joint:</p>
                <p>Locking tile:</p>
                <p>Area of panels in 1 box:</p>
              </div>
              <div className={styles.info__parametersInfo}>
                <p>674 × 193 × 20 mm</p>
                <p>0,107</p>
                <p>37 kg</p>
                <p>9.4 pcs.</p>
                <p>7 pcs.</p>
                <p>Yes</p>
                <p>Yes</p>
                <p>0,747 м 2</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.color}>
          <h3 className={styles.color__header}>Colour scheme</h3>
          <div className={styles.color__cards}>
            {moduleContentFunc(slabType)[1].map(({ name, cardImg, link }, index) => (
              <div key={index} to={link} className={styles.color__card}>
                <div className={styles.color__cardWrapper}>
                  <img className={styles.color__image} src={cardImg} alt="image" />
                </div>
                <p className={styles.color__name}>{name}</p>
              </div>
            ))}
          </div>
          <p className={styles.color__text}>
            *Due to the different technical specifications of monitors, the colour of the product
            may differ from the image shown on the website.
          </p>

          <h4 className={styles.color__extra}>Buy with this product</h4>
          <div className={styles.color__extraNames}>
            {moduleContentFunc(slabType)[2].map(({ name, price, image }, index) => (
              <div key={index} className={styles.color__item}>
                <div className={styles.color__itemName}>{name}</div>
                <div className={styles.color__itemPrice}>{price}</div>
                <img className={styles.color__itemImg} src={image} alt="bracing" />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>

      <section style={inlineStyles(bgImage)}>
        <Wrapper extraStyles={styles.extraAdvStyles}>
          <h4 className={styles.advantages__header}>{collection}</h4>
          <p className={styles.advantages__mark}>
            In addition to the eye-catching design, all Canyon fibre concrete panels are high
            quality and durable.
          </p>

          <div className={styles.advantages__reasons}>
            {moduleContentFunc(slabType)[3].map(({ number, text }, index) => (
              <div key={index} className={styles.advantages__item}>
                <div>{number}</div>
                <p>{parse(text)}</p>
              </div>
            ))}
          </div>
          <p className={styles.advantages__text}>{parse(benefitText)}</p>
        </Wrapper>
      </section>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default PanelPagePrototype;
