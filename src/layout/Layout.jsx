import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
