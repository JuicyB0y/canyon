import React, { useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.scss';
import Wrapper from '../Wrapper/Wrapper';

import Logo from '../../assets/Frame.svg';
import Down from '../../assets/arr_down.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const popupRef = useRef(null);

  const location = useLocation();

  const mainUrlFunc = () => {
    const urlAdress = location.pathname;

    if (urlAdress === '/') {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !event.composedPath().includes(popupRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className={mainUrlFunc() ? styles.backgroundFixed : styles.background}>
      <Wrapper /* extraStyles={styles.wrapperStyles} */>
        <NavLink to="/">
          <img className={styles.logo} src={Logo} alt="logo" />
        </NavLink>
        <nav className={styles.navigation}>
          <NavLink to="/catalog" className={styles.link}>
            catalog
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            about company
          </NavLink>
          <NavLink to="/portfolio" className={styles.link}>
            portfolio <img src={Down} alt="down" />
          </NavLink>
          <NavLink
            ref={popupRef}
            onClick={() => setOpen(!open)}
            className={styles.link}
            to="/partnership">
            partnership <img src={Down} alt="down" />
          </NavLink>
          <ul className={`${styles.popup__partnership} ${open ? styles.popupActive : ''}`}>
            <li>
              <Link className={styles.popup__link} to="/">
                Wholesalers
              </Link>
            </li>
            <li>
              <Link className={styles.popup__link} to="/">
                Suppliers
              </Link>
            </li>
          </ul>
          <NavLink to="/added-services" className={styles.link}>
            value-added services
          </NavLink>
        </nav>

        <div className={styles.popup}>
          <div className={styles.popup_one}></div>
          <div className={styles.popup_two}></div>
        </div>

        <div></div>
      </Wrapper>
    </div>
  );
};

export default Navigation;
