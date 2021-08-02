import React, { useState } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

interface MenuProps {
  menuList: MenuList;
}

export const MenuLayout = ({ menuList, isMobile, collapsed, onCollapseChange }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenkeys] = useState<string[]>([]);

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();
    setOpenkeys(key ? [key] : []);
  };

  return (
    <div>
      <h1>MenuLayout</h1>
      <Menu
        mode='inline'
        theme={theme}
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        onClick={
          isMobile
            ? () => {
                onCollapseChange(true);
              }
            : undefined
        }
        {...menuProps}
      >
        {this.generateMenus(menuTree)}
      </Menu>
    </div>
  );
};
