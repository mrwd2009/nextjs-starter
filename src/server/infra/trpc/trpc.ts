import { initTRPC } from '@trpc/server';
import { NextRequest } from 'next/server';

export type CustomTrpcContext = {
  requestId?: string;
  user?: {
    email: string;
    name: string;
    roles: string[];
  };
  req: NextRequest;
  resHeaders: Headers;
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
