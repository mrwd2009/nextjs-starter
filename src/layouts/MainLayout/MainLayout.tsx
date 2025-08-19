import { FC } from 'react';
import LayoutFooter from '../shared/LayoutFooter';
import MainLayoutHeader from './MainLayoutHeader';
import BC from './BC';
import { globalThemeToken } from '@/assets/styles';
import MainLayoutStyle from './MainLayoutStyle';

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-ex-layout-main relative flex min-h-svh flex-col">
      <MainLayoutStyle />
      <MainLayoutHeader />
      <BC />
      <main
        className="app-ex-layout-main__content flex flex-1 flex-col"
        style={{ margin: `0 ${globalThemeToken.layoutHorizontalPadding}px` }}
      >
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default MainLayout;
