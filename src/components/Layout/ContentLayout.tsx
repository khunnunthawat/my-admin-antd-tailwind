import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

export const ContentLayout: React.FC<ContentProps> = ({ children }) => {
  return <div className="bg-white px-12 py-6 relative">{children}</div>;
};
