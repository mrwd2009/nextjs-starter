'use client';
import Image from 'next/image';
import { globalThemeToken } from '@/assets/styles';
import { fade } from '@/assets/styles/style-utils';
import { Divider, Space, theme } from 'antd';
import brandLogo from '@/assets/images/brand.png';
import Link from 'next/link';
import ThemeSwitch from '../shared/theme/ThemeSwitch';
import UserAction from './UserAction';
import SystemMenu from './SystemMenu';
import { getRouteInfo } from '@/config/client-routes';

const billingCenterRoute = getRouteInfo('billingCenter');
const MainLayoutHeader = () => {
  const { token } = theme.useToken();
  return (
    <header
      className={`sticky top-0 z-10 flex w-full items-center backdrop-blur-xs backdrop-saturate-180`}
      style={{
        height: globalThemeToken.layoutHeaderHeight,
        paddingLeft: globalThemeToken.layoutHorizontalPadding,
        paddingRight: globalThemeToken.layoutHorizontalPadding,
        backgroundColor: fade(token.colorBgElevated, 0.8),
        boxShadow: (token as unknown as { boxShadowDrawerUp: string }).boxShadowDrawerUp,
      }}
    >
      <div className="flex-none pr-[6px]">
        <Link href={billingCenterRoute!.pathname} prefetch={false}>
          <Image src={brandLogo} alt="CFEX" width={100} style={{ position: 'relative' }} />
        </Link>
      </div>
      <div className="min-w-[10px] flex-auto">
        <SystemMenu />
      </div>
      <div className="flex flex-none items-center">
        <Space split={<Divider type="vertical" className="mr-1 ml-0" />}>
          <ThemeSwitch />
          <UserAction />
        </Space>
      </div>
    </header>
  );
};

export default MainLayoutHeader;
