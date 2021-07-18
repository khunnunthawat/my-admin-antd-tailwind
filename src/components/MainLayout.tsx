import React, { useState } from 'react';

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div>
      <h1>MainLayout</h1>
    </div>
  );
};

export default MainLayout;
