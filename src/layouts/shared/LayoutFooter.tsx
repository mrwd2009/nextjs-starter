'use client';
import { theme } from 'antd';
import { FC } from 'react';
import { globalThemeToken } from '@/assets/styles';
import { fade } from '@/assets/styles/style-utils';

const LayoutFooter: FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      className="flex flex-none items-center justify-end"
      style={{
        height: globalThemeToken.layoutFooterHeight,
        paddingLeft: globalThemeToken.layoutHorizontalPadding,
        paddingRight: globalThemeToken.layoutHorizontalPadding,
        color: token.colorText,
        fontSize: token.fontSizeLG,
      }}
    >
      <span
        className="app-footer-content"
        style={{
          paddingLeft: token.paddingXS,
          paddingRight: token.paddingXS,
          backgroundColor: fade(token.colorBgLayout, 0.7),
          borderRadius: token.borderRadius,
        }}
      >
        © {new Date().getFullYear()} CFEX, inc. All rights reserved.
      </span>
    </div>
  );
};

export default LayoutFooter;
