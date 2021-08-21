import React from 'react';
import Link from 'next/link';
import { Button, Result } from 'antd';
import { ContentLayout } from '../components/Layout/Content';

const NotFoundPage: React.FC = () => {
  return (
    <ContentLayout>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary'>
            <Link href='/'>admin</Link>
          </Button>
        }
      />
    </ContentLayout>
  );
};

export default NotFoundPage;
