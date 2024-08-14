import { ConfigProvider, App as AntdApp } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { themeSeedToken } from '@/assets/styles';
import AntdThemeContent from './antd-theme-content';

export default function AntdTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: themeSeedToken,
        }}
      >
        <AntdApp>
          <AntdThemeContent>{children}</AntdThemeContent>
        </AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
