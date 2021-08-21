import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

export const Bread = (): JSX.Element => {
  return (
    <Breadcrumb className='flex items-center mb-6 md:mb-4'>
      <Breadcrumb.Item key={1}>
        <Link href='/'>Home</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
