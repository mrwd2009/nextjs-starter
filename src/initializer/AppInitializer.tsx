import { FC, ReactNode } from 'react';
import ThemeProvider from '@/layouts/shared/theme/ThemeProvider';
import { AppInitializerHookWrapper } from './AppInitializerHookWrapper';
import { TanstackQueryWithTrpc } from './tanstack-query-with-trpc';
import StyledJsxRegistry from './styled-jsx';
import ThemedGlobalStyle from './styled-jsx/ThemedGlobalStyle';

const AppInitializer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <StyledJsxRegistry>
        <ThemedGlobalStyle />
        <AppInitializerHookWrapper />
        <TanstackQueryWithTrpc>{children}</TanstackQueryWithTrpc>
      </StyledJsxRegistry>
    </ThemeProvider>
  );
};

export default AppInitializer;
