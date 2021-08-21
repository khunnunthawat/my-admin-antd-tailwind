import React from 'react';
import { ContentProps } from '../../interface';

export const ContentLayout: React.FC<ContentProps> = ({ children }) => {
  return <div className='relative px-12 py-6 bg-white'>{children}</div>;
};
