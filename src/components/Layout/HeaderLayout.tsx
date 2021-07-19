import React from 'react';
import Link from 'next/link';
import {
  Menu,
  Layout,
  Avatar,
  Typography,
  Popover,
  Badge,
  List,
  Divider,
  Button,
} from 'antd';
import { HeaderLayoutProps } from '../../interface/Header.interface';
import {
  BellOutlined,
  RightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Text } = Typography;

const notifications = [
  {
    title: 'New User is registered.',
    date: '1/12/2021',
  },
  {
    title: 'Application has been approved.',
    date: '4/2/2021',
  },
];

const header =
  'flex relative shadow-md p-0 justify-between h-16 z-10 items-center bg-white';
// FIXME in fixed = width: ~'calc(100% - 256px)';
const fixed = 'fixed inset-0 z-30 transition w-64';
// FIXME in collapsed width: ~'calc(100% - 80px)';
const collapsedCss = 'w-20 bg-white';
const button =
  'w-12 h-12 leading-10 text-lg text-center cursor-pointer transition ease-in hover:text-blue-500';

const iconButton =
  'flex w-10 h-10 justify-center items-center rounded-3xl cursor-pointer hover:bg-gray-50 hover:text-blue-500';
const iconFont = 'mt-0.5 text-gray-200 text-2xl hover:text-blue-500';

const rightContainer = 'flex items-center';

const notificationPopover = 'p-0 flex-none ml-4';
const notification = 'py-6 w-80';
const notificationItem = 'transition py-3 px-6 cursor-pointer hover:bg-gray-50';
const clearButton =
  'text-center leading-10 cursor-pointer mt-4 hover:bg-blue-50';

const fontTitle = 'text-base';
const fontMenuItem = 'text-sm justify-center items-center';

// const antIcon =
//   'text-base inline-block not-italic leading-none text-center normal-case antialiased';

const avatar =
  'https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff';

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ collapsed, toggle }) => {
  const onCollapseChange = {
    onClick: toggle,
  };

  const rightContent = [
    <Menu key='user' mode='horizontal'>
      <SubMenu
        key={1}
        title={
          <>
            <span className='text-gray-400 mr-2'>
              <Text className={`${fontTitle}`}>Hi,</Text>
            </span>
            <span>nunthawat</span>
            <Avatar className='mx-2' src={avatar} />
          </>
        }
      >
        <Menu.Item key='setting'>
          <UserOutlined />
          <span className={`${fontMenuItem}`}>Setting</span>
        </Menu.Item>
        <Menu.Item key='signOut'>
          <LogoutOutlined />
          <span className={`${fontMenuItem}`}>Sign out</span>
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
              emptyText: <Text>You have viewed all notifications.</Text>,
            }}
            renderItem={(item) => (
              <List.Item className={`${notificationItem}`}>
                <List.Item.Meta
                  title={<Text>{item.title}</Text>}
                  description={item.date}
                />
                <RightOutlined className='text-xs text-gray-400' />
              </List.Item>
            )}
          />
          {notifications.length ? (
            <div className={`${clearButton}`}>
              <Text className={`${fontMenuItem}`}>Clear notifications</Text>
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
        {/* <BellOutlined className='text-blue-500' /> */}
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

export default HeaderLayout;
