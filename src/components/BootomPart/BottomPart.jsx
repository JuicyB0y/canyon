import React from 'react';

import styles from './BottomPart.module.scss';
import Wrapper from '../Wrapper/Wrapper';

import BgBottom from '../../assets/bg-bottom.jpg';
import Insta from '../../assets/insta.svg';
import Telegram from '../../assets/telegram_2.svg';
import WhatsApp from '../../assets/whatsapp_2.svg';
import YouTube from '../../assets/youtube_2.svg';

const BottomPart = ({ fromTop }) => {
  return (
    <>
      <Wrapper extraStyles={styles.canyonNow__wrapper}>
        <h4 className={`${fromTop} ${styles.canyonNow}`}>
          Keep an eye on,
          <br />
          <span>what's happening in the Canyon right now</span>
        </h4>
      </Wrapper>

      <footer className={styles.footer}>
        {/* <img className={styles.footer__bg} src={BgBottom} alt="background" /> */}
        {/* <div class="image-filter"></div> */}
        <Wrapper extraStyles={styles.footer__outerWrapper}>
          <div className={styles.footer__wrapper}>
            <div className={styles.footer__nav}>
              <div className={styles.footer__linkWrapper}>
                <a href="#" className={styles.footer__navItem}>
                  каталог
                </a>
              </div>
              <div className={styles.footer__linkWrapper}>
                <a href="#" className={styles.footer__navItem}>
                  о компании
                </a>
              </div>
              <div className={styles.footer__linkWrapper}>
                <a href="#" className={styles.footer__navItem}>
                  портфолио
                </a>
              </div>
              <div className={styles.footer__linkWrapper}>
                <a href="#" className={styles.footer__navItem}>
                  партнерство
                </a>
              </div>
              <div className={styles.footer__linkWrapper}>
                <a href="#" className={styles.footer__navItem}>
                  дополнительные услуги
                </a>
              </div>

              <div className={styles.footer__icons}>
                <a href="#">
                  <img src={Insta} alt="instagram" />
                </a>
                <a href="#">
                  <img src={Telegram} alt="telegram" />
                </a>
                <a href="#">
                  <img src={WhatsApp} alt="Whatsapp" />
                </a>
                <a href="#">
                  <img src={YouTube} alt="youtube" />
                </a>
              </div>
            </div>

            <div className={styles.footer__contactsWrapper}>
              <div className={styles.footer__contacts1}>
                <div className={styles.footer__phone}>+7 (495) 778-35-42</div>

                <div className={styles.footer__phone}>+7 (977) 100-00-35</div>
                <div className={styles.footer__phone}>
                  Москва, Рубцовская набережная, д. 3, стр. 1, 14 этаж офис 1413, центральный офис
                </div>
              </div>

              <div className={styles.footer__contacts1}>
                <div className={styles.footer__phone}>+7 (812) 920-13-10</div>
                <div className={styles.footer__phone}>+7 (931) 536-43-22</div>
                <div className={styles.footer__phone}>
                  Санкт-Петербург, Проспект 9-го января, д. 3, к. 1 (Офис 424) Бизнес-Центр «Гранд»
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </footer>
    </>
  );
};

export default BottomPart;
