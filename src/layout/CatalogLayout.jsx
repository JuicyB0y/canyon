import React from 'react';

import { Outlet } from 'react-router-dom';
import CatalogNavPart from '../pages/Catalog/CatalogNavPart/CatalogNavPart';
import Wrapper from '../components/Wrapper/Wrapper';

import styles from './CatalogLayout.module.scss';
import BottomPart from '../components/BootomPart/BottomPart';

const CatalogLayout = () => {
  return (
    <>
      <Wrapper extraStyles={styles.extraStyles}>
        <CatalogNavPart />
        <Outlet />
      </Wrapper>

      <BottomPart fromTop={styles.fromTop} />
    </>
  );
};

export default CatalogLayout;
