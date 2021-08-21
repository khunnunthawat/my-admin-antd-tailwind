import React from 'react';
import { HeaderProps } from '../../interface';
import { Menu, Avatar, Layout, Popover, List, Badge, Divider } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  BellOutlined,
  RightOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import {
  TextTitle,
  TextUser,
  TextNormal,
  Textnotifications,
} from '../Typography';
import {
  notificationPopover,
  notification,
  notificationItem,
  clearButton,
  iconFont,
  iconButton,
  header,
  fixed,
  collapsedCss,
  button,
  rightContainer,
  antIcon,
  avatar,
} from '../styles';

const { SubMenu } = Menu;

const notifications = [
  {
    message: 'New User is registered.',
    date: '1/12/2021',
  },
  {
    message: 'Application has been approved.',
    date: '4/11/2021',
  },
];

export const HeaderLayout: React.FC<HeaderProps> = ({ collapsed, toggle }) => {
  const onCollapseChange = {
    onClick: toggle,
  };

  const rightContent: JSX.Element[] = [
    <Menu key='user' mode='horizontal'>
      <SubMenu
        key={1}
        title={
          <>
            <TextTitle title='Hi,'></TextTitle>
            <TextUser title='Khunday'></TextUser>
            <Avatar className='mx-2' src={avatar} />
          </>
        }
      >
        <Menu.Item key='user'>
          <UserOutlined className={`${antIcon}`} />
          <TextNormal title='User'></TextNormal>
        </Menu.Item>
        <Menu.Item key='video'>
          <VideoCameraOutlined className={`${antIcon}`} />
          <TextNormal title='Video'></TextNormal>
        </Menu.Item>
        <Menu.Item key='setting'>
          <SettingOutlined className={`${antIcon}`} />
          <TextNormal title='Setting'></TextNormal>
        </Menu.Item>
        <Divider className='my-2' />
        <Menu.Item key='logout'>
          <LogoutOutlined className={`${antIcon}`} />
          <TextNormal title='Logout'></TextNormal>
        </Menu.Item>
      </SubMenu>
    </Menu>,
  ];

  rightContent.unshift(
    <Popover
      placement='bottomRight'
      trigger='click'
      key='notifications'
      overlayClassName={`${notificationPopover}`}
      content={
        <div className={`${notification}`}>
          <List
            itemLayout='horizontal'
            dataSource={notifications}
            locale={{
              emptyText: (
                <TextNormal title='You have viewed all notifications.' />
              ),
            }}
            renderItem={(item) => (
              <List.Item className={`${notificationItem}`}>
                <List.Item.Meta
                  title={<Textnotifications titleMessage={item.message} />}
                  description={item.date}
                />
                <RightOutlined className='text-xs text-gray-400' />
              </List.Item>
            )}
          />
          {notifications.length ? (
            <div className={`${clearButton}`}>
              <TextNormal title='Clear notifications' />
            </div>
          ) : null}
        </div>
      }
    >
      <Badge
        count={notifications.length}
        dot
        offset={[-10, 10]}
        className={`${iconButton}`}
      >
        <BellOutlined className={`${iconFont}+${iconButton}`} />
      </Badge>
    </Popover>
  );

  return (
    <Layout.Header
      className={`${header}+${fixed}+${collapsedCss}`}
      id='headerLayout'
    >
      <div className={`${button}`} {...onCollapseChange}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={`${rightContainer}`}>{rightContent}</div>
    </Layout.Header>
  );
};
