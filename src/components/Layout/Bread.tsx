import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

export const Bread = () => {
  return (
    <Breadcrumb className='flex mb-6 md:mb-4 items-center'>
      <Breadcrumb.Item key={1}>
        <Link href='/'>Home</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};