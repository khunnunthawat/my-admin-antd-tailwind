import Head from 'next/head';
import { Typography } from 'antd';
import { LoginPage } from '@/components/login/LoginPage';

const { Title } = Typography;

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Head>
        <title>My Admin Eiffel</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex items-center justify-center w-full text-center space-x-8'>
        <Title className='text-pink-500' level={4}>
          Admin, Eiffel
          <LoginPage />
        </Title>
      </div>
    </div>
  );
}
