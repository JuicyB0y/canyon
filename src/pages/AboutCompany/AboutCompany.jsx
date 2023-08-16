import React from 'react';

import styles from './AboutCompany.module.scss';
import Wrapper from '../../components/Wrapper/Wrapper';

import missionImg_1 from '../../assets/about_result_1.png';
import missionImg_2 from '../../assets/about_result_2.png';
import pdf from '../../assets/about_pdf.png';
import nature_1 from '../../assets/nature_1.png';
import nature_2 from '../../assets/nature_2.png';
import nature_3 from '../../assets/nature_3.png';
import nature_4 from '../../assets/nature_4.png';
import logo from '../../assets/about_company_logo.png';

import CanyonToday from '../../components/CanyonToday/CanyonToday';
import VerticalCarousel from '../../components/VerticalCarousel/VerticalCarousel';

import data from '../../data.json';
import VerticalSwiper from '../../components/VerticalSwiper/VerticalSwiper';
import BottomPart from '../../components/BootomPart/BottomPart';

const natureInfoArr = [
  {
    img: nature_1,
    header: 'Environmentally conscious',
    text: 'Canyon combines manufacturing the highest quality products with a strong program of activities designed to mitigate our impact on the natural environment and ecosystem.',
    extraStyleImg: '',
    flexStyle: styles.nature__section,
  },
  {
    img: nature_2,
    header: 'Sustainable approach to product manufacturing',
    text: 'All raw materials used are completely natural and safe. The company takes an environmentally friendly approach to the production of its products and uses only natural materials extracted from quarries. Mineral pigments are used for rich and natural shades',
    extraStyleImg: styles.nature__textLeft,
    flexStyle: styles.nature__sectionReverse,
  },
  {
    img: nature_3,
    header: 'Rational consumption of resources',
    text: 'The Canyon factory has achieved high standards of energy efficiency. We use modern technologies and equipment that reduce energy consumption in the production process and minimize negative impacts on the environment. By choosing Canyon facade panels, you not only get a quality and safe product but also care about the ecological purity of production.',
    extraStyleImg: '',
    flexStyle: styles.nature__section,
  },
  {
    img: nature_4,
    header: 'Nature as a source of beauty and inspiration',
    text: 'When creating fiber concrete panels, we were inspired by nature and its beauty. Our goal was to create a material that would imitate natural surfaces such as stone, wood and travertine as closely as possible. Thanks to its unique design, the CANYON product line has become a popular material for creating facades and interiors in all styles from classic to contemporary. Our panels are not only aesthetically pleasing but also functional, making them the ideal material for any exterior design.',
    extraStyleImg: styles.nature__textLeft,
    flexStyle: styles.nature__sectionReverse,
  },
];

const AboutCompany = () => {
  return (
    <>
      <section className={styles.gif}>
        <div className={styles.gif__headerWrapper}>
          <h1 className={styles.gif__header}>Давайте познакомимся ближе</h1>
        </div>
      </section>
      <section className={styles.logo}>
        <Wrapper extraStyles={styles.logo__wrapper}>
          <div className={styles.logo__imagePart}>
            <img className={styles.logo__imgLogo} src={logo} alt="logo" />
          </div>
          <div className={styles.logo__textPart}>
            <p className={styles.logo__text}>
              In 2023, Canyon celebrates its first twenty years in business.
              <br />
              Years of challenges, projects, unique developments and continuous research accompanied
              by constant growth. During this time, the production and range have expanded, sales
              offices have appeared in different countries, the dealer network has expanded and
              several showrooms have been opened.
              <br />
              Thanks to new ideas, the popularity of our facade systems is constantly growing.
              <br />
              We are the first manufacturer to organize the production of complete facade systems in
              Cyprus. Our latest development of the metal sub-system allows us to install facade
              panels on buildings up to 75m high, and with an additional project up to 150m high.
              This was previously unavailable.
              <br />
              We understand how important it is to express your individuality through the design of
              a space and therefore pay attention to every detail of the products we develop.
              <br />
            </p>
          </div>
        </Wrapper>
      </section>

      <Wrapper extraStyles={styles.mission}>
        <div className={styles.mission__intro}>
          <div className={styles.mission__introText}>
            <h4>Find out about our mission</h4>
            <p>
              Canyon - uniqueness based on years of experience. One of the Russian leaders in the
              production of facade solutions.
            </p>
          </div>
          <img className={styles.mission__introImg} src={missionImg_1} alt="example" />
        </div>
        <div className={styles.mission__intro}>
          <img className={styles.mission__introImg} src={missionImg_2} alt="example" />
          <div className={styles.mission__introText}>
            <h4>Values of the company</h4>
            <p>
              We prioritize our customers. Our company concept is made by and for people.
              <br />
              We care about the future. Production of environmentally friendly and safe products.
              <br /> We lead the market. Continuous development and innovative technologies.
              <br /> We make products accessible to everyone. Flexible prices and a variety of
              product lines.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className={styles.lang}>
        <h4>Would you like to get to know us a little better?</h4>
        <p>Choose your language to see our catalogue:</p>
        <div className={styles.lang__buttons}>
          <button className={styles.lang__button}>
            <img src={pdf} alt="pdf" />
            Русский
          </button>
          <button className={styles.lang__button}>
            <img src={pdf} alt="pdf" />
            Ehglish
          </button>
        </div>
      </div>

      <Wrapper extraStyles={styles.todayWrapper}>
        <CanyonToday />

        {/* <div className={styles.story}> */}
        {/* <h3 className={styles.story__header}>Наша история</h3> */}

        <VerticalSwiper />

        {/* <VerticalCarousel data={data.slides} leadingText={data.leadingText} /> */}
        {/* </div> */}
      </Wrapper>

      <Wrapper>
        <section className={styles.nature}>
          <h3 className={styles.nature__header}>With care for the environment</h3>

          {natureInfoArr.map(({ img, header, text, extraStyleImg, flexStyle }, index) => (
            <div key={index} className={flexStyle}>
              <img className={styles.nature__imgLeft} src={img} alt="photo" />
              <div className={extraStyleImg}>
                <p className={styles.nature__infoHeader}>{header}</p>
                <p className={styles.nature__infoText}>{text}</p>
              </div>
            </div>
          ))}
        </section>
      </Wrapper>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default AboutCompany;
