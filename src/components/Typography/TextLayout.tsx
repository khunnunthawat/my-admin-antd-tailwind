import React from 'react';
import { Typography } from 'antd';
import { TitleMessageProps, TitleProps } from '../../interface';

const { Text } = Typography;
const fontHead: Partial<string> = 'text-2xl font-normal';
const fontTitle: Partial<string> = 'text-base mr-2';
const fontField: Partial<string> = 'text-base';
const fontTabHead: Partial<string> = 'text-2xl font-light';
const fontUser: Partial<string> = 'text-sm mr-2';
const fontNormal: Partial<string> = 'text-sm';

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

export const TextUser: React.FC<TitleProps> = ({ title }) => {
  return <Text className={`${fontUser}`}>{title}</Text>;
};

export const TextNormal: React.FC<TitleProps> = ({ title }) => {
  return <Text className={`${fontNormal}`}>{title}</Text>;
};

export const Textnotifications: React.FC<TitleMessageProps> = ({
  titleMessage,
}) => {
  return <Text className={`${fontNormal}`}>{titleMessage}</Text>;
};
