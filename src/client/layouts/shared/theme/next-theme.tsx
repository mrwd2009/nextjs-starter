'use client';
import { ThemeProvider } from 'next-themes';
import { SYSTEM_THEME, THEME_STORAGE_KEY } from './theme-constants';

export default function NextTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme={SYSTEM_THEME}
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
}
