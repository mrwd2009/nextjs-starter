import type { Metadata } from 'next';
import '@ant-design/v5-patch-for-react-19';
import './globals.css';
import AppInitializer from '../initializer/AppInitializer';

export const metadata: Metadata = {
  title: 'CFEX Partner Portal',
  description:
    'CFEX offers a suite of solutions for CFE buyers, sellers and aggregators to enable them to streamline CFE transactions with one another.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppInitializer>{children}</AppInitializer>
      </body>
    </html>
  );
}
