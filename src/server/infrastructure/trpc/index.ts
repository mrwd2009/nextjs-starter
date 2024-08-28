import routers from './router';
import { router } from './trpc-utils';

export const appRouter = router(routers);

export type AppRouter = typeof appRouter;
