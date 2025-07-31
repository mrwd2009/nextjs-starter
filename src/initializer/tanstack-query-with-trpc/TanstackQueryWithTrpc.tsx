'use client';
import { FC, ReactNode, useState } from 'react';
import { createTRPCClient, httpBatchLink, TRPCClientError } from '@trpc/client';
import { getQueryClient } from './tanstack-query';
import type { AppRouter } from '@/server/infra/trpc';
import clientConfig from '@/config/client-config';
import { QueryClientProvider } from '@tanstack/react-query';
import { TRPCProvider } from './trpc-client';
import { showError } from '@/lib/antd-static-tools';
import { useRouter } from 'next/navigation';

export const TanstackQueryWithTrpc: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = getQueryClient();
  const router = useRouter();
  const [trpcClient] = useState(() => {
    return createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: clientConfig.trpc.basePath,
          fetch: async (url, options) => {
            try {
              const response = await fetch(url, options);

              const clonedResponse = response.clone();
              const requestId = clonedResponse.headers.get('x-request-id');
              let body = await clonedResponse.json();
              if (!Array.isArray(body)) {
                body = [body];
              }
              const errors = body as Array<{ error: TRPCClientError<AppRouter> }>;
              if (errors.some((error) => !!error.error?.message)) {
                if (errors.some((error) => error.error?.data?.httpStatus === 401)) {
                  if (!window.location.pathname.startsWith(`${clientConfig.basePath}/login`)) {
                    router.push('/login');
                  }
                  return response;
                }

                const errorMsg = errors
                  .filter((error) => error.error?.message)
                  .map((error) => error.error.message)
                  .join('. ');
                showError(`${errorMsg}\n[Request ID: ${requestId}]`, '__global_trpc_error__');
                return response;
              }

              return response;
            } catch (error) {
              showError((error as Error).message, '__global_fetch_error__');
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
