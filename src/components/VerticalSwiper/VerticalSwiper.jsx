import React, { useEffect, useRef, useState } from 'react';
import { Navigation, Mousewheel, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import parse from 'html-react-parser';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './VerticalSwiper.module.scss';

import missionImg_2 from '../../assets/about_result_2.png';
import SwiperButtons from './SwiperButtons';

import aboutCompany_1 from '../../assets/history_img1.png';
import aboutCompany_2 from '../../assets/history_img2.png';
import aboutCompany_3 from '../../assets/history_img3.png';
import aboutCompany_hard from '../../assets/about_bg.png';

const slidesInfo = {
  leadingText: '20',
  slides: [
    {
      date: '03',
      swiperImg: aboutCompany_1,
      text: 'Launch of Canyon <br/> Company Production',
    },
    {
      date: '06',
      swiperImg: aboutCompany_1,
      text: 'Own fleet of vehicles',
    },
    {
      date: '07',
      swiperImg: aboutCompany_1,
      text: 'The appearance of two-color panels',
    },
    {
      date: '10',
      swiperImg: aboutCompany_1,
      text: 'Appearance of a new design - panels with overlapping joints',
    },
    {
      date: '15',
      swiperImg: aboutCompany_2,
      text: 'We acquired a new site in Konakovo and launched production of premium multi-color panels.',
    },
    {
      date: '18',
      swiperImg: aboutCompany_1,
      text: "Our engineers have improved the design of the upper mount, which improved the reliability of fixing panels 'Canyon' to the ventilated facade",
    },
    {
      date: '20',
      swiperImg: aboutCompany_1,
      text: 'New «3D mosaic» panels, interfloor slabs and composite corners were developed.',
    },
    {
      date: '21',
      swiperImg: aboutCompany_3,
      text: 'A unique metal subsystem was developed and a technical certificate obtained for this subsystem, which allows to mount our products to a height of 75 meters, and with additional permission and calculations up to 150 meters',
    },
    {
      date: '22',
      swiperImg: aboutCompany_1,
      text: 'A system of plug-in panels in a specialized profile, new to us, was finalized and tested, and a technical certificate was obtained',
    },
  ],
};

const VerticalSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRightActive, setIsRightActive] = useState(false);

  const [change, setChange] = useState(false);

  const slidesArr = slidesInfo.slides;

  const isFirstSlide = useRef(true);

  const swiper = useSwiper();

  useEffect(() => {
    setIsRightActive(true);
    const timer = setTimeout(() => {
      setIsRightActive(false);
    }, 500); // duration of transition
    return () => {
      clearTimeout(timer);
    };
  }, [change]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 3600) {
        // Значение scrollY, при котором прокрутка останавливается
        //   document.body.style.overflow = 'hidden'; // Остановка прокрутки страницы
        //   if (isFirstSlide.current && activeIndex === 3) {
        //     console.log('aaaaaaaa');
        //     window.scrollBy(0, 50); // Прокрутка страницы на -50 пикселей по оси Y
        //     isFirstSlide.current = false;
        //   }
        // Прокрутка слайдеров в Swiper
      } else {
        document.body.style.overflow = 'auto'; // Возобновление прокрутки страницы
        isFirstSlide.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setChange(swiper.activeIndex);
    setTimeout(() => {
      setActiveIndex(swiper.activeIndex);
      console.log(activeIndex);
    }, 500); // duration of transition через 500мс поменяется слайд, а пока он не поменялся начнется анимация " растворения"
  };

  const onReachEnd = (swiper) => {
    setTimeout(() => {
      swiper.params.mousewheel.releaseOnEdges = true;
      console.log('reacthend');
    }, 1500);

    setTimeout(() => {
      swiper.detachEvents(); // disable mousewheel control on last slide
      console.log('reacthend');
    }, 1500);
  };

  const scrollTopFunc = () => {
    window.scrollBy(0, -250);
  };

  return (
    <div className={styles.bigWrapper}>
      <h3 className={styles.header}>Our history</h3>
      <div className={styles.verticalSwiper}>
        <div className={styles.static}>20</div>
        <div className={styles.wrapper}>
          <Swiper
            className={styles.left}
            direction={'vertical'}
            modules={[Navigation, Mousewheel, A11y]}
            spaceBetween={100}
            // mousewheel={true}
            slidesPerView={3}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            speed={1000} // Set the desired transition speed here
            onReachEnd={onReachEnd}
            onReachBeginning={onReachEnd}>
            {slidesArr.map((item, index) => (
              <SwiperSlide
                key={index}
                id="swiper"
                className={`${styles.swiperItem} ${
                  index === activeIndex ? styles.itemActive : ''
                }`}>
                {item.date}
              </SwiperSlide>
            ))}

            <SwiperButtons isRightActive={isRightActive} />
          </Swiper>

          <div className={`${styles.right} ${isRightActive ? styles.right_active : ''}`}>
            {slidesArr.map((item, index) => (
              <div
                key={index}
                className={`${styles.right__content} ${
                  index === activeIndex ? styles.right__visible : ''
                }`}>
                <img
                  src={item.swiperImg}
                  alt="img"
                  style={{
                    opacity: isRightActive ? 0 : 1,
                    transform: `translateY(${isRightActive ? '40px' : '0'})`,
                    transition: 'opacity 0.5s, transform 0.5s',
                  }}
                />

                <p
                  className={styles.text}
                  style={{
                    opacity: isRightActive ? 0 : 1,
                    transform: `translateY(${isRightActive ? '40px' : '0'})`,
                    transition: 'opacity 0.5s, transform 0.5s',
                  }}>
                  {parse(item.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSwiper;

//я хочу чтобы сайт зафиксировался на определенной высоте window.scrollY

//   const swiperRef = useRef(null);
//   const swiperCurrent = swiperRef.current;

//   отступ window.scrollY = 3631.199951171875
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY || window.pageYOffset;

//       // Здесь вы можете настроить условие для определения положения прокрутки,
//       // когда нужно начать прокрутку слайдера
//       if (scrollPosition >= 3631 && scrollPosition <= 4200) {
//         // Здесь вызывайте методы Swiper для прокрутки слайдера вперед
//         console.log('scroll');

//         swiperCurrent.slideNext();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//swiper?.params?.mousewheel

//

// в этом коде при переключении слайдера картинки img иногда меняются чуть медленнее, чем обычно, из-за чего может быть такая ошибка

// import React, { useEffect, useRef, useState } from 'react';
// import { Navigation, A11y } from 'swiper/modules';
// // Import Swiper React components
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import parse from 'html-react-parser';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import styles from './VerticalSwiper.module.scss';

// import missionImg_2 from '../../assets/about_result_2.png';
// import SwiperButtons from './SwiperButtons';

// import aboutCompany_1 from '../../assets/history_img1.png';
// import aboutCompany_2 from '../../assets/history_img2.png';
// import aboutCompany_3 from '../../assets/history_img3.png';
// import aboutCompany_hard from '../../assets/about_bg.png';

// const slidesInfo = {
//   leadingText: '20',
//   slides: [
//     {
//       date: '03',
//       swiperImg: aboutCompany_1,
//       text: 'Launch of Canyon <br/> Company Production',
//     },
//     {
//       date: '06',
//       swiperImg: aboutCompany_1,
//       text: 'Own fleet of vehicles',
//     },
//     {
//       date: '07',
//       swiperImg: aboutCompany_hard,
//       text: 'The appearance of two-color panels',
//     },
//     {
//       date: '10',
//       swiperImg: aboutCompany_1,
//       text: 'Appearance of a new design - panels with overlapping joints',
//     },
//     {
//       date: '15',
//       swiperImg: aboutCompany_2,
//       text: 'We acquired a new site in Konakovo and launched production of premium multi-color panels.',
//     },
//     {
//       date: '18',
//       swiperImg: aboutCompany_1,
//       text: "Our engineers have improved the design of the upper mount, which improved the reliability of fixing panels 'Canyon' to the ventilated facade",
//     },
//     {
//       date: '20',
//       swiperImg: aboutCompany_hard,
//       text: 'New «3D mosaic» panels, interfloor slabs and composite corners were developed.',
//     },
//     {
//       date: '21',
//       swiperImg: aboutCompany_3,
//       text: 'A unique metal subsystem was developed and a technical certificate obtained for this subsystem, which allows to mount our products to a height of 75 meters, and with additional permission and calculations up to 150 meters',
//     },
//     {
//       date: '22',
//       swiperImg: aboutCompany_1,
//       text: 'A system of plug-in panels in a specialized profile, new to us, was finalized and tested, and a technical certificate was obtained',
//     },
//   ],
// };

// const VerticalSwiper = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isRightActive, setIsRightActive] = useState(false);

//   const [change, setChange] = useState(false);

//   const slidesArr = slidesInfo.slides;

//   const swiper = useSwiper();

//   useEffect(() => {
//     setIsRightActive(true);
//     const timer = setTimeout(() => {
//       setIsRightActive(false);
//     }, 600); // duration of transition
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [change]);

//   const handleSlideChange = (swiper) => {
//     setChange(swiper.activeIndex);

//     setTimeout(() => {
//       setActiveIndex(swiper.activeIndex);
//       console.log(activeIndex);
//     }, 400);

//     setTimeout(() => {
//       setActiveIndex(swiper.activeIndex);
//       console.log(activeIndex);
//     }, 500); // duration of transition

//     //  const swipeElems = document.querySelectorAll('#swiper');
//     //  console.log(swipeElems);
//     //  setTimeout(() => {
//     //    swipeElems.forEach((item) => {
//     //      item.classList.remove('itemActive');
//     //    });
//     //    swipeElems[currentIndex].classList.add('itemActive');
//     //  }, 500); // duration of transition
//   };

//   return (
//     <div className={styles.bigWrapper}>
//       <h3 className={styles.header}>Наша история</h3>
//       <div className={styles.verticalSwiper}>
//         <div className={styles.static}>20</div>
//         <div className={styles.wrapper}>
//           <Swiper
//             className={styles.left}
//             direction={'vertical'}
//             modules={[Navigation, A11y]}
//             spaceBetween={100}
//             slidesPerView={3}
//             centeredSlides={true}
//             onSlideChange={handleSlideChange}
//             speed={1000} // Set the desired transition speed here
//           >
//             {slidesInfo.slides.map((item, index) => (
//               <SwiperSlide
//                 key={index}
//                 id="swiper"
//                 className={`${styles.swiperItem} ${
//                   index === activeIndex ? styles.itemActive : ''
//                 }`}>
//                 {item.date}
//               </SwiperSlide>
//             ))}

//             <SwiperButtons isRightActive={isRightActive} />
//           </Swiper>

//           <div className={`${styles.right} ${isRightActive ? styles.right_active : ''}`}>
//             <div className={styles.right__content}>
//               <img
//                 src={slidesArr[activeIndex]?.swiperImg}
//                 alt="img"
//                 style={{
//                   opacity: isRightActive ? 0 : 1,
//                   transform: `translateY(${isRightActive ? '20px' : '0'})`,
//                   transition: 'opacity 0.5s, transform 0.5s',
//                 }}
//               />

//               <p
//                 className={styles.text}
//                 style={{
//                   opacity: isRightActive ? 0 : 1,
//                   transform: `translateY(${isRightActive ? '20px' : '0'})`,
//                   transition: 'opacity 0.5s, transform 0.5s',
//                 }}>
//                 {parse(slidesArr[activeIndex].text)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalSwiper;
