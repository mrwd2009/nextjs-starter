import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '@/server/infra/trpc';
import { createTRPCClient, httpBatchLink, TRPCClientError } from '@trpc/client';
import clientConfig from '@/config/client-config';
import { showError } from '@/lib/antd-static-tools';
import { getClientRouter } from '@/lib/client-router-utils';
import { getRouteInfo } from '@/config/client-routes';

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

export const trpcClient = createTRPCClient<AppRouter>({
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
              const loginRoute = getRouteInfo('login');
              const loginLandingRoute = getRouteInfo('loginLanding');
              if (
                !window.location.pathname.startsWith(
                  `${clientConfig.basePath}${loginRoute!.pathname}`,
                )
              ) {
                const router = getClientRouter();
                if (process.env.NODE_ENV === 'development') {
                  router.push(loginRoute!.pathname);
                } else {
                  router.push(loginLandingRoute!.pathname);
                }
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
