import React from 'react';
import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';
import { antIconMenu, antLayoutSiderChildren } from '../styles';

export const MenuLayout = (): JSX.Element => {
  return (
    <div className={`${antLayoutSiderChildren}`}>
      <Menu mode='inline'>
        <Menu.Item
          key='1'
          icon={
            <AntDesignOutlined className='inline-flex items-center text-3xl ' />
          }
          className='my-2.5 text-xl text-blue-500'
        >
          ADMIN EIFFEL
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined className={`${antIconMenu}`} />}>
          User
        </Menu.Item>
        <Menu.Item
          key='3'
          icon={<VideoCameraOutlined className={`${antIconMenu}`} />}
        >
          Video
        </Menu.Item>
        <Menu.Item
          key='4'
          icon={<UploadOutlined className={`${antIconMenu}`} />}
        >
          Upload
        </Menu.Item>
      </Menu>
    </div>
  );
};
