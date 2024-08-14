'use client';
import { ConfigProvider, App as AntdApp, theme as antdTheme } from 'antd';
import { themeSeedToken } from '@/assets/styles';
import { useAntdStaticToolsInitializer } from '@/lib/antd-static-tools';
import { useTheme } from 'next-themes';
import { DARK_THEME, SYSTEM_THEME } from './theme-constants';

function AntdThemeInnerContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useAntdStaticToolsInitializer();
  return children;
}

export default function AntdThemeContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { theme, resolvedTheme } = useTheme();
  return (
    <ConfigProvider
      theme={
        theme === DARK_THEME ||
        (theme === SYSTEM_THEME && resolvedTheme === DARK_THEME)
          ? {
              token: {
                ...themeSeedToken,
              },
              algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
            }
          : {
              token: {
                ...themeSeedToken,
              },
              algorithm: [antdTheme.compactAlgorithm],
            }
      }
    >
      <AntdApp>
        <AntdThemeInnerContent>{children}</AntdThemeInnerContent>
      </AntdApp>
    </ConfigProvider>
  );
}
