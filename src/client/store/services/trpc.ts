import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryClient } from '@tanstack/react-query';
import clientProperties from '@/client/config/client-properties';
import type { AppRouter } from '@/server/infrastructure/trpc';

function getBaseUrl() {
  return clientProperties.basePath.trpc;
}

const trpc = createTRPCReact<AppRouter>();
export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: getBaseUrl(),
    }),
  ],
});
export const queryClient = new QueryClient();

export default trpc;
