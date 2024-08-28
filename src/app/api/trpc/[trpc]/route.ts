import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/infrastructure/trpc';
import serverProperties from '@/server/config/server-properties';

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: serverProperties.basePath.trpc,
    req,
    router: appRouter,
  });
}

export { handler as GET, handler as POST };
