import React from 'react';
import { Typography, Form, Row, Button, Input, Card } from 'antd';

const { Text } = Typography;

export const LoginPage = (): JSX.Element => {
  return (
    <Card className='flex items-center justify-center p-10 my-6 bg-white border-blue-500 shadow-md w-80 h-80'>
      <Form name='login'>
        <Form.Item name='username' hasFeedback>
          <Input placeholder={`Username`} />
        </Form.Item>
        <Form.Item name='password' hasFeedback>
          <Input type='password' placeholder={`Password`} />
        </Form.Item>
        <Row>
          <Button type='primary' htmlType='submit'>
            <Text className='text-white'>Sign in</Text>
          </Button>
        </Row>
      </Form>
    </Card>
  );
};
