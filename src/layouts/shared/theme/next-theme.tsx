'use client';
import { ThemeProvider } from 'next-themes';

export default function NextTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      storageKey="app-ex-v2-theme"
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
}
