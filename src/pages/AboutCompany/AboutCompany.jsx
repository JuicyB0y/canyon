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

import CanyonToday from '../../components/CanyonToday/CanyonToday';
import VerticalCarousel from '../../components/VerticalCarousel/VerticalCarousel';

import data from '../../data.json';
import VerticalSwiper from '../../components/VerticalSwiper/VerticalSwiper';
import BottomPart from '../../components/BootomPart/BottomPart';

const natureInfoArr = [
  {
    img: nature_1,
    header: 'С заботой об окружающей среде',
    text: 'Canyon сочетает производство продукции высочайшего качества с реализацией решительной программы мероприятий, направленной на смягчение нашего воздействия на природную среду и экосистему.',
    extraStyleImg: '',
    flexStyle: styles.nature__section,
  },
  {
    img: nature_2,
    header: 'Экологичный подход к производству своих продуктов',
    text: 'Все используемое сырье является полностью природными и безопасными. Компания придерживается экологически чистого подхода к производству своих продуктов и использует только натуральные материалы, добываемые из карьеров. Для насыщенных и естественных оттенков используются минеральные пигменты',
    extraStyleImg: styles.nature__textLeft,
    flexStyle: styles.nature__sectionReverse,
  },
  {
    img: nature_3,
    header: 'Рациональное потребление ресурсов',
    text: 'Завод Canyon достиг высоких стандартов энергоэффективности. Мы используем современные технологии и оборудование, которые позволяют снизить потребление энергии в процессе производства и уменьшить негативное воздействие на окружающую среду. Выбирая фасадные панели Canyon, вы получаете не только качественный и безопасный продукт, но и заботитесь об экологической чистоте производства.',
    extraStyleImg: '',
    flexStyle: styles.nature__section,
  },
  {
    img: nature_4,
    header: 'Природа как источник красоты и вдохновения',
    text: 'При создании фибробетонных панелей мы вдохновлялись природой и ее красотой. Нашей задачей было создание материала, который бы максимально точно имитировал природные поверхности, такие как камень, дерево и травертин. Благодаря уникальному дизайну продуктовая линейка CANYON стала популярным материалом для создания фасадов и интерьеров в любых стилях от классического до современного. Наши панели не только эстетически привлекательны, но и функциональны, что делает их идеальным материалом для любого дизайна экстерьера.',
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
          <div className={styles.logo__imagePart}></div>
          <div className={styles.logo__textPart}>
            <p className={styles.logo__text}>
              В 2023 году Canyon празднует свои первые двадцать лет бизнеса. Годы вызовов, проектов,
              уникальных разработок и непрерывных исследований, сопровождаемых постоянным ростом. За
              это время производство и ассортимент расширились, появились офисы продаж в разных
              странах, расширилась дилерская сеть, открылись несколько шоу-румов.
              <br />
              Благодаря новым идеям, популярность наших фасадных систем постоянно растет. <br />
              Мы являемся первым производителем, который организовал изготовление полноценных
              фасадных систем на Кипре. Наша новейшая разработка металлической подсистемы позволяет
              монтировать фасадные панели на зданиях высотой до 75 м, а по дополнительному проекту –
              до 150м. Прежде такое было недоступно.
              <br />
              Мы понимаем, как важно выразить свою индивидуальность через дизайн пространства и
              поэтому уделяем внимание каждой детали разрабатываемой продукции.
            </p>
          </div>
        </Wrapper>
      </section>

      <Wrapper extraStyles={styles.mission}>
        <div className={styles.mission__intro}>
          <div className={styles.mission__introText}>
            <h4>Познакомьтесь с нашей миссией</h4>
            <p>
              Canyon - уникальность, основанная на многолетнем опыте. Один из российских лидеров в
              области производства фасадных решений.
            </p>
          </div>
          <img className={styles.mission__introImg} src={missionImg_1} alt="example" />
        </div>
        <div className={styles.mission__intro}>
          <img className={styles.mission__introImg} src={missionImg_2} alt="example" />
          <div className={styles.mission__introText}>
            <h4>Ценности компании Canyon</h4>
            <p>
              Ориентируемся на наших клиентов.
              <br />
              Концепция нашей компании разработана людьми и для людей.
              <br />
              Заботимся о будущем. Производство экологически чистых и безопасных продуктов.
              <br />
              Лидируем на рынке. Непрерывное развитие и инновационные технологии.
              <br />
              Делаем продукты доступными для всех. Гибкие цены и разнообразие продуктовых линеек.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className={styles.lang}>
        <h4>Хотите узнать нас чуть-чуть ближе?</h4>
        <p>Выберите язык для просмотра каталога</p>
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
          <h3 className={styles.nature__header}>С заботой о природе</h3>

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
