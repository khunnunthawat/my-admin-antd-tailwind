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
  'flex relative shadow-md p-0 justify-between h-16 z-10 items-center bg-white';
// FIXME in fixed = width: ~'calc(100% - 256px)';
const fixed = 'fixed inset-0 z-30 transition w-64';
// FIXME in collapsed width: ~'calc(100% - 80px)';
const collapsedCss = 'w-20 bg-white';
const button =
  'w-10 h-10 leading-10 text-lg text-center cursor-pointer transition ease-in hover:text-blue-500';
const iconButton =
  'flex w-12 h-12 justify-center items-center rounded-3xl cursor-pointer hover:text-blue-500';
const iconFont = 'text-gray-200 text-2xl';
const rightContainer = 'flex items-center';

const notificationPopover = 'p-0 hidden flex-none ml-4';
const notification = 'py-6 w-80';
const notificationItem = 'transition py-3 px-6 cursor-pointer hover:bg-gray-50';
const clearButton = 'text-center h-12 leading-10 cursor-pointer';

const fontTitle = 'text-base';
const avatar =
  'https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff';

interface HeaderLayoutProps {
  collapsed: boolean;
  toggle: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ collapsed, toggle }) => {
  const shrinkComponentProps = {
    onClick: toggle,
  };

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
            locale={{
              emptyText: <h1>You have viewed all notifications.</h1>,
            }}
            renderItem={(item) => (
              <List.Item className={`${notificationItem}`}>
                <List.Item.Meta
                  title={<span>item.title</span>}
                  description='Application has been approved.'
                />
                <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
              </List.Item>
            )}
          />
          <div className={`${clearButton}`}>
            <Text className={`${fontTitle}`}>Clear notifications</Text>
          </div>
        </div>
      }
    >
      <Badge count={1} dot offset={[-10, 10]} className={`${iconButton}`}>
        <BellOutlined className={`${iconFont}`} />
      </Badge>
    </Popover>
  );

  return (
    <Layout.Header
      className={`${header}+${fixed}+${collapsedCss}`}
      id='headerLayout'
    >
      <div
        className={`${button}`}
        // onClick={onCollapseChange.bind(this, !collapsed)}
      >
        {collapsed ? (
          <MenuUnfoldOutlined {...shrinkComponentProps} />
        ) : (
          <MenuFoldOutlined {...shrinkComponentProps} />
        )}
      </div>
      <div className={`${rightContainer}`}>{rightContent}</div>
    </Layout.Header>
  );
};

export default HeaderLayout;
