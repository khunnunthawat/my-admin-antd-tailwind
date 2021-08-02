import React from 'react';
import { Layout } from 'antd';
import { MenuLayout } from './MenuLayout';

const layoutSider = 'w-64';
const sider = 'flex flex-col justify-between shadow-lg z-10';
const brand = 'flex z-0 h-16 items-center justify-center py-0 px-6 shadow-lg';
const logo = 'flex items-center justify-center';
const h1 =
  'align-text-bottom text-base font-bold uppercase inline-block whitespace-nowrap mb-0 transition ease-in-out';
const colorGradient = 'bg-gradient-to-r from-pink-400  to-rose-400';
const menuContainer = 'overflow-x-hidden h-screen py-6 px-0';

export const SliderLayout = ({
  menus,
  collapsed,
  isMobile,
  onCollapseChange,
}) => {
  return (
    <div>
      <h1>SliderLayout</h1>
      <Layout.Sider
        width={256}
        breakpoint='lg'
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={!isMobile && onCollapseChange}
        className={`${sider + layoutSider}`}
      >
        <div className={brand}>
          <div className={logo}>
            <img className='w-8 m-2' alt='logo' src='./public/github.svg' />
            {!collapsed && (
              <h1 className={`${h1 + colorGradient}`}>Eiffel Admin</h1>
            )}
          </div>
        </div>

        <div className={menuContainer}>
          <MenuLayout
            menuList={menus}
            isMobile={isMobile}
            collapsed={collapsed}
            onCollapseChange={onCollapseChange}
          />
        </div>
      </Layout.Sider>
    </div>
  );
};
