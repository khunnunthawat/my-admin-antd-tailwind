import { Typography } from 'antd';

const { Text } = Typography;
const fontHead = 'text-2xl font-normal';
const fontTitle = 'text-base';
const fontField = 'text-base';
const fontTabHead = 'text-2xl font-light';

interface TitleProps {
  title: string;
}

export const TextHead: React.FC<TitleProps> = ({ title }) => {
  return <Text className={`${fontHead}`}>{title}</Text>;
};

export const TextTitle: React.FC<TitleProps> = ({ title }) => {
  return <Text className={`${fontTitle}`}>{title}</Text>;
};

export const TextLabel: React.FC<TitleProps> = ({ title }) => {
  return <Text className={`${fontField}`}>{title}</Text>;
};

export const TextTabHead: React.FC<TitleProps> = ({ title }) => {
  return <Text className={`${fontTabHead}`}>{title}</Text>;
};
