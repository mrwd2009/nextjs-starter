import { errorHandler, measure } from './middleware';
import { _router, _publicProcedure, Context } from './trpc';
import { nanoid } from 'nanoid';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export const createContext = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opts: FetchCreateContextFnOptions,
): Promise<Context> => {
  return {
    requestId: nanoid(),
  };
};

export const router = _router;
export const publicProcedure = _publicProcedure.use(measure).use(errorHandler);
