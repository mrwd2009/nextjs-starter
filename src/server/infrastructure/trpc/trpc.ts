import { initTRPC } from '@trpc/server';

const t = initTRPC.create();
export const _middleware = t.middleware;
export const _router = t.router;
export const _publicProcedure = t.procedure;
