import React from 'react';
import KansasPrototype from '../../../components/prototype/PanelPagePrototype';

const Dakota3 = () => {
  const aboutText = `The Dakota series of fiber concrete façade panels is a stylish imitation of a natural slate from a centuries-old canyon.<br/>
   Volumetric texture of the stone will noticeably decorate the building, with it any country house will turn into a luxurious European mansion.`;

  const benefitText = `The low weight of the tiles is also one of the main advantages of Dakota curtain wall systems. <br />
   Due to the fact that the panels are very light, they do not create a tangible load on the walls of the building, so with their help you can easily improve even an old structure, as well as homes that do not have a strong foundation, such as houses installed on pile foundations.`;

  const collection = 'Why choose the Dakota collection?';
  return (
    <>
      <KansasPrototype
        name="Dakota № 3"
        aboutText={aboutText}
        activeColor={0}
        slabType={'dakota'}
        benefitText={benefitText}
        collection={collection}
      />
    </>
  );
};

export default Dakota3;
