import React from 'react';
import PanelPagePrototype from '../../../components/prototype/PanelPagePrototype';

import Kansas_bg from '../../../assets/kansas_68_bg.png';
import Kansas_main from '../../../assets/kansas_68-main.png';

const Kansas68 = () => {
  const aboutText = `The "Kansas" series is a stylish and high-quality decorative stone brick panel that has long been beloved by customers. 
    <br />
  The rough surface, as if treated by the hot southern winds of the American plains, immediately attracts the eye and makes you want to touch it.`;

  const benefitText = `You can buy the facade panel under the brick "Kansas" to equip the ventilated facade on
  buildings constructed of any material.
  <br />
  <div>
    The low weight of the panels does not have unnecessary load on the foundation, and
    they are quite simple to install - you only need a wooden crate or metal subsystem.
  </div>`;

  const collection = 'Why choose the Kansas collection?';

  return (
    <>
      <PanelPagePrototype
        name="Kansas № 68"
        aboutText={aboutText}
        activeColor={2}
        bgImage={Kansas_bg}
        benefitText={benefitText}
        mainImg={Kansas_main}
        slabType={'kansas'}
        collection={collection}
      />
    </>
  );
};

export default Kansas68;
