import React from 'react';
import PanelPagePrototype from '../../../components/prototype/PanelPagePrototype';

import Arizona_main from '../../../assets/arizona_main_68.png';
import bgImage from '../../../assets/arizona_bg_68.png';

const Arizona68 = () => {
  const aboutText = `Fiber concrete panels "Arizona" is an excellent solution for the arrangement of hinged ventilated facade. <br/>
   It can be used on wooden, concrete brick CIPpanel buildings, and even mounted together with insulation.`;

  const benefitText = `The low weight of the tiles is also one of the main advantages of Arizona curtain wall systems.<br/>
   Due to the fact that the panels are very light, they do not create a tangible load on the walls of the building, so with their help you can easily improve even an old structure, as well as homes that do not have a strong foundation, such as houses installed on pile foundations.`;

  const collection = 'Why choose the Arizona collection?';

  return (
    <>
      <PanelPagePrototype
        name="Arizona № 68"
        aboutText={aboutText}
        bgImage={bgImage}
        activeColor={2}
        benefitText={benefitText}
        mainImg={Arizona_main}
        slabType={'arizona'}
        collection={collection}
      />
    </>
  );
};

export default Arizona68;
