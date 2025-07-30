import { FC } from 'react';
import LayoutFooter from '../shared/LayoutFooter';
import MainLayoutHeader from './MainLayoutHeader';

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex min-h-svh flex-col">
      <MainLayoutHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default MainLayout;
