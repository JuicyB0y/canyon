import React from 'react';
import PanelPagePrototype from '../../../components/prototype/PanelPagePrototype';

const Travertine3 = () => {
  const aboutText = `This decorative stone very accurately imitates the rock, which was lined with famous buildings - the ancient Colosseum and St. Peter's Cathedral in the Vatican.<br/>
   Externally, the panels are almost indistinguishable from the natural material, but their qualities are much better.`;

  const benefitText = `The low weight of the tiles is also one of the main advantages of Dakota curtain wall systems.<br/>
  Due to the fact that the panels are very light, they do not create a tangible load on the walls of the building, so with their help you can easily improve even an old structure, as well as homes that do not have a strong foundation, such as houses installed on pile foundations.`;

  const collection = 'Why choose the Travertine collection?';

  return (
    <>
      <PanelPagePrototype
        name="Travertine № 3"
        aboutText={aboutText}
        activeColor={0}
        benefitText={benefitText}
        slabType={'travertine'}
        collection={collection}
      />
    </>
  );
};

export default Travertine3;
