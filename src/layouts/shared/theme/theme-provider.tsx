import AntdTheme from './antd-theme';
import NextTheme from './next-theme';

export default function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextTheme>
      <AntdTheme>{children}</AntdTheme>
    </NextTheme>
  );
}
