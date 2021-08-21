import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

function MyApp({ Component, pageProps }: any) {
  return (
    <MainLayout>
      <Head>
        <title>My Admin Eiffel</title>
        <link rel='icon' href='/github.svg' />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
