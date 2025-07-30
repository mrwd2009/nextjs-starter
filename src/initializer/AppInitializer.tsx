import { FC, ReactNode } from 'react';
import ThemeProvider from '@/layouts/shared/theme/ThemeProvider';
import { AppInitializerHookWrapper } from './AppInitializerHookWrapper';
import { TanstackQueryWithTrpc } from './tanstack-query-with-trpc';
import StyledJsxRegistry from './styled-jsx';

const AppInitializer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <StyledJsxRegistry>
        <AppInitializerHookWrapper />
        <TanstackQueryWithTrpc>{children}</TanstackQueryWithTrpc>
      </StyledJsxRegistry>
    </ThemeProvider>
  );
};

export default AppInitializer;
