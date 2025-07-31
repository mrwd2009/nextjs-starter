import '@/server/infra/initializer';
import serverConfig from '@/server/config/server-config';
import { appRouter } from '@/server/infra/trpc';
import { nanoid } from 'nanoid';
import { getNoCacheHeaders } from '@/server/lib/http-headers';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';

function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: serverConfig.trpc.basePath,
    req,
    router: appRouter,
    createContext: async (opts) => {
      return {
        ...opts,
        req,
        requestId: nanoid(),
      };
    },
    responseMeta: (opts) => {
      const headers = getNoCacheHeaders();
      if (opts.ctx?.requestId) {
        headers.set('x-request-id', opts.ctx.requestId);
      }
      return {
        headers,
      };
    },
  });
}

export { handler as GET, handler as POST };
