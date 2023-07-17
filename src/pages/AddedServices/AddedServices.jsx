import React from 'react';

import styles from './AddedServices.module.scss';
import Wrapper from '../../components/Wrapper/Wrapper';

import image_1 from '../../assets/service_1.png';
import image_2 from '../../assets/service_2.png';
import image_3 from '../../assets/service_3.png';
import image_4 from '../../assets/service_4.png';
import image_5 from '../../assets/service_5.png';
import image_6 from '../../assets/service_6.png';
import image_7 from '../../assets/service_7.png';
import image_8 from '../../assets/service_8.png';
import image_3d from '../../assets/service_3d.png';
import BottomPart from '../../components/BootomPart/BottomPart';

const servicesArr = [
  { serviceImg: image_1, serviceName: 'Анкеры', itemStyles: styles.item1 },
  { serviceImg: image_2, serviceName: 'Кронштейны', itemStyles: styles.item2 },
  { serviceImg: image_3, serviceName: 'Мембранные пленки', itemStyles: styles.item3 },
  { serviceImg: image_4, serviceName: 'Утеплители', itemStyles: styles.item4 },
  { serviceImg: image_5, serviceName: 'Монтаж', itemStyles: styles.item5 },
  { serviceImg: image_6, serviceName: 'Сметный расчет', itemStyles: styles.item6 },
  { serviceImg: image_7, serviceName: 'Проектирование', itemStyles: styles.item7 },
  { serviceImg: image_8, serviceName: 'Доставка', itemStyles: styles.item8 },
  { serviceImg: image_3d, serviceName: '3D визуализации', itemStyles: styles.item9 },
];

const AddedServices = () => {
  return (
    <>
      <Wrapper extraStyles={styles.extraStyles}>
        <h1 className={styles.header}>Еще у нас покупают</h1>

        <div className={styles.services}>
          {servicesArr.map(({ serviceImg, serviceName, itemStyles }, index) => (
            <div key={index} className={itemStyles}>
              <img src={serviceImg} className={styles.item__image} alt="service_image" />
              <p className={styles.item__name}>{serviceName}</p>
            </div>
          ))}
        </div>
      </Wrapper>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default AddedServices;
