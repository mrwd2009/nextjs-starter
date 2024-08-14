'use client';
import { useAntdStaticToolsInitializer } from '@/lib/antd-static-tools';

export default function AntdThemeContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useAntdStaticToolsInitializer();
  return <>{children}</>;
}
