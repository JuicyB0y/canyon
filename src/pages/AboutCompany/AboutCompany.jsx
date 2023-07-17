import React from 'react';

import styles from './AboutCompany.module.scss';
import Wrapper from '../../components/Wrapper/Wrapper';

import missionImg_1 from '../../assets/about_result_1.png';
import missionImg_2 from '../../assets/about_result_2.png';
import pdf from '../../assets/about_pdf.png';
import CanyonToday from '../../components/CanyonToday/CanyonToday';
import VerticalCarousel from '../../components/VerticalCarousel/VerticalCarousel';

import data from '../../data.json';

const AboutCompany = () => {
  return (
    <div>
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

        <div className={styles.story}>
          <h3 className={styles.story__header}>Наша история</h3>

          <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutCompany;
