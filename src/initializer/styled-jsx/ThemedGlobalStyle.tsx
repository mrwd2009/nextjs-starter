'use client';
import { theme } from 'antd';
import { FC } from 'react';

const ThemedGlobalStyle: FC = () => {
  const { token } = theme.useToken();
  return (
    <style jsx global>{`
      body {
        background-color: ${token.colorBgLayout};
        color: ${token.colorText};
      }
    `}</style>
  );
};

export default ThemedGlobalStyle;
