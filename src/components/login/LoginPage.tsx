import React from 'react';
import { Typography, Form, Row, Button, Input } from 'antd';
// import { ContentLayout } from '@dtstack/shared/backoffice-main-layout';

const { Text } = Typography;

export const LoginPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div>
          <div className='flex items-center justify-center space-x-4 bg-white w-80 h-80 p-10 shadow-lg'>
            <Form>
              <Form.Item
                name='username'
                hasFeedback
              >
                <Input placeholder={`Username`} />
              </Form.Item>
              <Form.Item
                name='password'
                hasFeedback
              >
                <Input type='password' placeholder={`Password`} />
              </Form.Item>
              <Row>
                <Button type='primary' htmlType='submit'>
                  <Text className='text-white'>Sign in</Text>
                </Button>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
