import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/infrastructure/trpc';
import serverProperties from '@/server/config/server-properties';
import { createContext } from '@/server/infrastructure/trpc/trpc-utils';

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: serverProperties.basePath.trpc,
    req,
    router: appRouter,
    createContext,
  });
}

export { handler as GET, handler as POST };
