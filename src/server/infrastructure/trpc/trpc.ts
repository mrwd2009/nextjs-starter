import { initTRPC } from '@trpc/server';

export type Context = {
  requestId?: string;
};

const t = initTRPC.context<Context>().create({
  errorFormatter({ ctx, shape }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        requestId: ctx?.requestId,
      },
    };
  },
});
export const _middleware = t.middleware;
export const _router = t.router;
export const _publicProcedure = t.procedure;
