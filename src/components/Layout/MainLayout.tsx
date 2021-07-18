import React, { useState } from 'react';
import HeaderLayout from './HeaderLayout';

const MainLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // const handleResize = () => {
  //   if (window.innerWidth < 768) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  return (
    <div>
      <HeaderLayout collapsed={collapsed} toggle={toggle} />
      {children}
    </div>
  );
};

export default MainLayout;
