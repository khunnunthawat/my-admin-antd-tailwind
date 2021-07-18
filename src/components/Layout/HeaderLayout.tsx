import React from 'react';
import { Menu, Layout, Avatar, Typography, Popover, Badge, List } from 'antd';
import {
  BellOutlined,
  RightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Text } = Typography;

const header =
  'flex relative shadow-md p-0 justify-between h-20 z-10 items-center bg-white';
// FIXME in fixed = width: ~'calc(100% - 256px)';
const fixed = 'fixed inset-0 z-30 transition w-64';
// FIXME in collapsed width: ~'calc(100% - 80px)';
const collapsedCss = 'w-20';
const button =
  'w-10 h-10 leading-10 text-lg text-center cursor-pointer transition ease-in hover:text-blue-500';
const iconButton =
  'flex w-12 h-12 justify-center items-center rounded-3xl cursor-pointer hover:text-blue-500';
const iconFont = 'text-gray-200 text-2xl';
const rightContainer = 'flex items-center';

const fontTitle = 'text-base';
const avatar =
  'https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff';

interface HeaderLayoutProps {
  collapsed: boolean;
  // toggle: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ collapsed }) => {
  const rightContent = [
    <Menu key='user' mode='horizontal'>
      <SubMenu
        title={
          <>
            <span
              className='text-gray-400 mr-2'
              // style={{ color: '#999', marginRight: 4 }}
            >
              <Text className={`${fontTitle}`}>Hi,</Text>
            </span>
            <span>Khunnunthawat</span>
            <Avatar className='mr-2' src={avatar} />
            {/* FIXME in Avatar style={{ marginLeft: 8 }} */}
          </>
        }
      >
        <Menu.Item key='SignOut'>
          <Text className={`${fontTitle}`}>Sign out</Text>
        </Menu.Item>
      </SubMenu>
    </Menu>,
  ];

  return (
    <div>
      <h1>HeaderLayout</h1>
      <Layout.Header
        className={`${header}+${fixed}+${collapsedCss}`}
        id='headerLayout'
      >
        <div
          className={`${button}`}
          // onClick={onCollapseChange.bind(this, !collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className={`${rightContainer}`}>{rightContent}</div>
      </Layout.Header>
    </div>
  );
};

export default HeaderLayout;
