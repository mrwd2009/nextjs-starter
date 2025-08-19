import { trpcClient } from '@/initializer/tanstack-query-with-trpc/trpc-client';

export const getTrpcClient = () => {
  return trpcClient;
};
