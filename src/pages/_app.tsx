import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import MainLayout from '../components/Layout/MainLayout';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
