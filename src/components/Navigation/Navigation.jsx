import React from 'react';
import styles from './Navigation.module.scss';
import Wrapper from '../Wrapper/Wrapper';

import Logo from '../../assets/Frame.svg';
import Down from '../../assets/arr_down.svg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={styles.background}>
      <Wrapper /* extraStyles={styles.wrapperStyles} */>
        <NavLink to="/">
          <img className={styles.logo} src={Logo} alt="logo" />
        </NavLink>
        <nav className={styles.navigation}>
          <NavLink to="/catalog" className={styles.link}>
            catalog
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            about company <img src={Down} alt="down" />
          </NavLink>
          <NavLink to="/portfolio" className={styles.link}>
            portfolio <img src={Down} alt="down" />
          </NavLink>
          <NavLink className={styles.link} to="/partnership">
            partnership <img src={Down} alt="down" />
          </NavLink>
          <NavLink to="/added-services" className={styles.link}>
            value-added services
          </NavLink>
        </nav>

        <div className={styles.popup}>
          <div className={styles.popup_one}></div>
          <div className={styles.popup_two}></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navigation;
