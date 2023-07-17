import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Wrapper from '../../components/Wrapper/Wrapper';

import styles from './Portfolio.module.scss';

import BottomPart from '../../components/BootomPart/BottomPart';
import AllProjects from '../../components/AllProjects/AllProjects';
import PrivateHouses from '../../components/PrivateHouses/PrivateHouses';
import CommerceProj from '../../components/CommerceProj/CommerceProj';

const casesArr = ['Портфолио проектов', 'Частные дома', 'Жилые комплексы', 'Коммерческие проекты'];

const Portfolio = () => {
  const [chapter, setChapter] = useState(0);

  const changeChapter = (index) => {
    setChapter(index);

    switchIcons(index);
  };

  const switchIcons = (chapter) => {
    switch (chapter) {
      case 0:
        return <AllProjects />;
      case 1:
        return <PrivateHouses />;
      case 2:
        return <h1 className={styles.temporary}>скоро здесь появится что-то крутецкое...</h1>;
      case 3:
        return <CommerceProj />;
      default:
        return <AllProjects />;
    }
  };

  return (
    <>
      <Wrapper extraStyles={styles.wrapper}>
        <div className={styles.sections}>
          {casesArr.map((item, i) => (
            <button
              key={i}
              onClick={() => changeChapter(i)}
              className={chapter === i ? styles.sections__button_active : styles.sections__button}>
              {item}
            </button>
          ))}
        </div>

        {switchIcons(chapter)}
      </Wrapper>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default Portfolio;
