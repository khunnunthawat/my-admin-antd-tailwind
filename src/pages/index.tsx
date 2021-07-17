import Head from 'next/head';
import { Button, DatePicker, Typography, version } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Head>
        <title>Hello Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex items-center justify-center w-full text-center space-x-4'>
        <Title className='text-pink-500' level={4}>
          Hello, Developer
        </Title>
        <DatePicker />
        <Button type='primary'>Primary Button</Button>
      </div>
    </div>
  );
}
