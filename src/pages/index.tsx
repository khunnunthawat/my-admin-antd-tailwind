import Head from 'next/head';
import { Typography } from 'antd';
import { LoginPage } from '@/components/login/LoginPage';
import { TestPage } from '../components/login/TestPage';

const { Title } = Typography;

export default function Home() {
  return (
    // <div className='flex flex-col items-center justify-center min-h-screen'>
    //   <Head>
    //     <title>My Admin Eiffel</title>
    //     <link rel='icon' href='/favicon.ico' />
    //   </Head>

    //   <div className='flex items-center justify-center w-full text-center space-x-4'>
    //     <Title className='text-pink-500' level={4}>
    //       Admin, Eiffel
    //     </Title>
    //   </div>
    // </div>
    <LoginPage />
    // <TestPage />
  );
}
