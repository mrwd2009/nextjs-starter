'use client';
import { FC, ReactNode, useState } from 'react';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { getQueryClient } from './tanstack-query';
import { AppRouter } from '@/server/infra/trpc';
import clientConfig from '@/config/client-config';
import { QueryClientProvider } from '@tanstack/react-query';
import { TRPCProvider } from './trpc-client';

export const TanstackQueryWithTrpc: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() => {
    return createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: clientConfig.trpc.basePath,
          fetch: async (url, options) => {
            try {
              const response = await fetch(url, options);
              console.log(response.headers.get('x-request-id'));
              return response;
            } catch (error) {
              console.error(error);
              throw error;
            }
          },
        }),
      ],
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {children}
      </TRPCProvider>
    </QueryClientProvider>
  );
};
