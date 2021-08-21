import React, { useState } from 'react';
import { Layout } from 'antd';
import { HeaderLayout } from './Layout/Header';
import { MenuLayout } from './Layout/Menu';
import { Bread } from './Layout/Bread';
import { silderBox } from './styles';

const { Content, Footer, Sider } = Layout;

export const MainLayout: React.FC<any> = ({ children }) => {
  const defaultCollapsedWidth = 80;
  const [collapsedWidth, setCollapsedWidth] = useState(defaultCollapsedWidth);
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onHandleBreakpoint = (broken: boolean): void => {
    if (!broken) {
      setCollapsedWidth(defaultCollapsedWidth);
    } else {
      setCollapsedWidth(0);
    }
  };

  return (
    <Layout className='min-h-screen'>
      <Sider
        width={240}
        breakpoint='lg'
        theme='light'
        collapsible
        trigger={null}
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        onBreakpoint={onHandleBreakpoint}
        collapsedWidth={collapsedWidth}
        className={`${silderBox}`}
      >
        <MenuLayout />
      </Sider>
      <Layout>
        <HeaderLayout collapsed={collapsed} toggle={toggle} />
        <div id='mainLayout' className='overflow-x-hidden overflow-y-scroll'>
          <Content className='mx-6 mt-6'>
            <Bread />
            <div className='min-h-full p-6 bg-white'>{children}</div>
          </Content>
          <Footer className='text-center'>
            Ant Design ©2021 Khunnunthawat
          </Footer>
        </div>
      </Layout>
    </Layout>
  );
};
