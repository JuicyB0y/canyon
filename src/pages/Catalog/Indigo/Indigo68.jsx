import React from 'react';
import PanelPagePrototype from '../../../components/prototype/PanelPagePrototype';

import Indigo_main from '../../../assets/indigo_main_68.png';

const Indigo68 = () => {
  const aboutText = `When creating the fiber concrete panels "Indigo", our experts focused on the most popular customer requests. <br/>
   The texture of the panels is unique - it seems that each element is covered with leather or fabric, and the relief resembles folds of a soft material.`;

  const benefitText = `The low weight of the tiles is also one of the main advantages of Indigo curtain wall systems.<br/>
  Due to the fact that the panels are very light, they do not create a tangible load on the walls of the building, so with their help you can easily improve even an old structure, as well as homes that do not have a strong foundation, such as houses installed on pile foundations.`;

  const collection = 'Why choose the Indigo collection?';

  return (
    <>
      <PanelPagePrototype
        name="Indigo № 68"
        aboutText={aboutText}
        activeColor={1}
        benefitText={benefitText}
        slabType={'indigo'}
        mainImg={Indigo_main}
        collection={collection}
      />
    </>
  );
};

export default Indigo68;
