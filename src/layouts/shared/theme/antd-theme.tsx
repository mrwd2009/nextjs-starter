import { ConfigProvider, App as AntdApp } from 'antd';
import { themeSeedToken } from '@/assets/styles';
import AntdThemeContent from './antd-theme-content';

export default function AntdTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConfigProvider
      theme={{
        token: themeSeedToken,
      }}
    >
      <AntdApp>
        <AntdThemeContent>{children}</AntdThemeContent>
      </AntdApp>
    </ConfigProvider>
  );
}
