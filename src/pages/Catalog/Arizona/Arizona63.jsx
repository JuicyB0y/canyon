import React from 'react';
import PanelPagePrototype from '../../../components/prototype/PanelPagePrototype';

const Arizona63 = () => {
  const aboutText = `Fiber concrete panels "Arizona" is an excellent solution for the arrangement of hinged ventilated facade. <br/>
   It can be used on wooden, concrete brick CIPpanel buildings, and even mounted together with insulation.`;

  const benefitText = `The low weight of the tiles is also one of the main advantages of Arizona curtain wall systems.<br/>
   Due to the fact that the panels are very light, they do not create a tangible load on the walls of the building, so with their help you can easily improve even an old structure, as well as homes that do not have a strong foundation, such as houses installed on pile foundations.`;

  const collection = 'Why choose the Arizona collection?';

  return (
    <>
      <PanelPagePrototype
        name="Arizona № 63"
        aboutText={aboutText}
        activeColor={1}
        benefitText={benefitText}
        slabType={'arizona'}
        collection={collection}
      />
    </>
  );
};

export default Arizona63;
