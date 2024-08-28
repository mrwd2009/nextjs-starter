import { AntdRegistry } from '@ant-design/nextjs-registry';
import AntdThemeContent from './antd-theme-content';

export default function AntdTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AntdRegistry>
      <AntdThemeContent>{children}</AntdThemeContent>
    </AntdRegistry>
  );
}
