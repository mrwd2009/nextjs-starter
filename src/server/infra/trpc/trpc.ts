import { initTRPC } from '@trpc/server';

export type CustomTrpcContext = {
  requestId?: string;
  userEmail?: string;
  userRoles?: string[];
};

const t = initTRPC.context<CustomTrpcContext>().create({
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

export const createTrpcRouter = t.router;
export const createTrpcMiddleware = t.middleware;
export const baseProcedure = t.procedure;
