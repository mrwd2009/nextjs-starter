'use client';
import Image from 'next/image';
import { globalThemeToken } from '@/assets/styles';
import { fade } from '@/assets/styles/style-utils';
import { Divider, Space, theme } from 'antd';
import brandLogo from '@/assets/images/brand.png';
import Link from 'next/link';
import ThemeSwitch from '../shared/theme/ThemeSwitch';

const ErrorLayoutHeader = () => {
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
      <div className="flex flex-auto justify-center pr-[6px]">
        <Link href="/" prefetch={false}>
          <Image src={brandLogo} alt="CFEX" width={140} style={{ position: 'relative' }} />
        </Link>
      </div>
      <div className="flex flex-none items-center">
        <Space split={<Divider type="vertical" className="mr-1 ml-0" />}>
          <ThemeSwitch />
        </Space>
      </div>
    </header>
  );
};

export default ErrorLayoutHeader;
