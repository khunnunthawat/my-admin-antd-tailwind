###
Antd :
  https://ant.design/components/layout/#Layout.Sider
  https://ant.design/components/drawer/#header
###

###
Tailwind :
  width: ~'calc(100% - 256px)';
  https://github.com/tailwindlabs/discuss/issues/256#issuecomment-490617782
###




MenuLayout : 
import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const MenuLayout = ({ menus }) => {

  const = []

  onOpenChange = openKeys => {
    const { menus } = this.props
    const rootSubmenuKeys = menus.filter(_ => !_.menuParentId).map(_ => _.id)

    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )

    let newOpenKeys = openKeys
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      newOpenKeys = latestOpenKey ? [latestOpenKey] : []
    }

    this.setState({
      openKeys: newOpenKeys,
    })
    store.set('openKeys', newOpenKeys)
  }

  generateMenus = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={
              <>
                <span>{item.name}</span>
              </>
            }
          >
            {this.generateMenus(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.id}>
          <NavLink to={item.route || '#'}>
            {item.icon && iconMap[item.icon]}
            <span>{item.name}</span>
          </NavLink>
        </Menu.Item>
      );
    });
  };

  return (
    <div>
      <h1>MenuLayout</h1>
      <Menu
        mode='inline'
        theme="light"
        onOpenChange={onOpenChange as any}
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

export default MenuLayout;
