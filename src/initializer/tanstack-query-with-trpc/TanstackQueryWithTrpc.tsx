'use client';
import { FC, ReactNode } from 'react';
import { getQueryClient } from './tanstack-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { TRPCProvider, trpcClient } from './trpc-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const TanstackQueryWithTrpc: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </TRPCProvider>
    </QueryClientProvider>
  );
};
