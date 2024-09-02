import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/infrastructure/trpc';
import serverProperties from '@/server/config/server-properties';
import { createContext } from '@/server/infrastructure/trpc/trpc-utils';
import { httpHeaders } from '@/shared/lib';

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: serverProperties.basePath.trpc,
    req,
    router: appRouter,
    createContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    responseMeta(opts) {
      return {
        headers: httpHeaders.getNoCacheHeaders(),
      };
    },
  });
}

export { handler as GET, handler as POST };
