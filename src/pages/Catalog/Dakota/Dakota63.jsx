import React from 'react';
import PanelPagePrototype from '../../../components/prototype/PanelPagePrototype';

import dakota_main from '../../../assets/dakota_main_63.png';

const aboutText = `The Dakota series of fiber concrete façade panels is a stylish imitation of a natural slate from a centuries-old canyon.<br/>
   Volumetric texture of the stone will noticeably decorate the building, with it any country house will turn into a luxurious European mansion.`;

const benefitText = `The low weight of the tiles is also one of the main advantages of Dakota curtain wall systems. <br />
   Due to the fact that the panels are very light, they do not create a tangible load on the walls of the building, so with their help you can easily improve even an old structure, as well as homes that do not have a strong foundation, such as houses installed on pile foundations.`;

const collection = 'Why choose the Dakota collection?';

const Dakota63 = () => {
  return (
    <div>
      <PanelPagePrototype
        name="Dakota № 63"
        mainImg={dakota_main}
        aboutText={aboutText}
        activeColor={3}
        slabType={'dakota'}
        benefitText={benefitText}
        collection={collection}
      />
    </div>
  );
};

export default Dakota63;
