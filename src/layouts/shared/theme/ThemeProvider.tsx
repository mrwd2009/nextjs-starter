'use client';
import AntdTheme from './AntdTheme';
import NextTheme from './NextTheme';

export default function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextTheme>
      <AntdTheme>{children}</AntdTheme>
    </NextTheme>
  );
}
