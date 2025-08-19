'use client';
import { globalThemeToken } from '@/assets/styles';
import { getRoutesMenu } from '@/config/client-routes';
import { useDarkModeQuery } from '@/hooks';
import { Menu, MenuProps, theme } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const routesMenu = getRoutesMenu();

const getMenuItems = ({ routes }: { routes: typeof routesMenu }) => {
  const items: MenuProps['items'] = [];
  for (const route of routes) {
    if (route.children?.length) {
      items.push({
        key: route.pathname,
        label: route.title,
        popupClassName: 'app-ex-system-menu-popup',
        children: getMenuItems({ routes: route.children }),
      });
      continue;
    }

    items.push({
      key: route.pathname,
      label: <Link href={route.pathname}>{route.title}</Link>,
    });
  }
  return items;
};

const SystemMenu: FC = () => {
  const { isDarkMode } = useDarkModeQuery();
  const pathname = usePathname();
  const { token } = theme.useToken();
  return (
    <>
      <Menu
        mode="horizontal"
        className="app-ex-system-menu"
        overflowedIndicatorPopupClassName="app-ex-system-menu-popup"
        selectedKeys={[pathname]}
        triggerSubMenuAction="click"
        theme={isDarkMode ? 'dark' : 'light'}
        forceSubMenuRender
        items={getMenuItems({ routes: routesMenu })}
      />
      <style jsx global>{`
        .app-ex-system-menu {
          font-weight: 500;
          font-size: ${token.fontSizeLG}px;
          line-height: ${globalThemeToken.layoutHeaderHeight}px;
          border-bottom: none;
          background-color: transparent;
        }

        .app-ex-system-menu.ant-menu-dark {
          background-color: transparent;
        }

        .app-ex-system-menu.ant-menu-dark.ant-menu-horizontal > .ant-menu-item-selected,
        .app-ex-system-menu.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu-selected {
          background: transparent;
        }

        .app-ex-system-menu-popup {
          .ant-menu-submenu,
          .ant-menu-item {
            height: ${Math.ceil((token.fontSizeLG / 12) * 32)}px;
            font-weight: 500;
            font-size: ${token.fontSizeLG}px;
            line-height: ${Math.ceil((token.fontSizeLG / 12) * 32)}px;
          }

          .ant-menu-title-content {
            width: 100%;
            > .ant-spin-nested-loading {
              width: 100%;
            }
          }
        }

        .app-ex-system-menu-popup.ant-menu-dark.ant-menu-submenu > .ant-menu {
          background: ${token.colorBgElevated};
        }
      `}</style>
    </>
  );
};

export default SystemMenu;
