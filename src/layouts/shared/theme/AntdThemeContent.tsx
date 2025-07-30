'use client';
import { ConfigProvider, App as AntdApp, theme as antdTheme } from 'antd';
import { antdThemeSeedToken } from '@/assets/styles';
import { useTheme } from 'next-themes';
import { DARK_THEME, SYSTEM_THEME } from './theme-constants';
import { useMounted } from '@/hooks';

export default function AntdThemeContent({ children }: Readonly<{ children: React.ReactNode }>) {
  const { theme, resolvedTheme } = useTheme();
  const { isMounted } = useMounted();
  return (
    <ConfigProvider
      theme={
        isMounted &&
        (theme === DARK_THEME || (theme === SYSTEM_THEME && resolvedTheme === DARK_THEME))
          ? {
              token: {
                ...antdThemeSeedToken,
              },
              algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
              cssVar: true,
            }
          : {
              token: {
                ...antdThemeSeedToken,
              },
              algorithm: [antdTheme.compactAlgorithm],
              cssVar: true,
            }
      }
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}
