import trpcRouter from './router';
import { createTrpcRouter } from './trpc';

export const appRouter = createTrpcRouter(trpcRouter);
export type AppRouter = typeof appRouter;
