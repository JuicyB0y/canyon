import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children, extraStyles }) => {
  return <div className={`${styles.wrapper} ${extraStyles}`}>{children}</div>;
};

export default Wrapper;
