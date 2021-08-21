import { Typography } from 'antd';
import { LoginPage } from '../components/login';

const { Title } = Typography;

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex my-4 text-center'>
        <Title className='text-blue-500' level={4}>
          ADMIN, EIFFEL
        </Title>
      </div>
      <LoginPage />
    </div>
  );
}
