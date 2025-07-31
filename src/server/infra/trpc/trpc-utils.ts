import { createTrpcRouter, baseProcedure } from './trpc';
import { errorHandler, measure, authentication, rateLimiterHandler } from './middleware';

const publicTrpcProcedure = baseProcedure.use(measure).use(errorHandler).use(rateLimiterHandler);
const protectedTrpcProcedure = baseProcedure
  .use(measure)
  .use(errorHandler)
  .use(rateLimiterHandler)
  .use(authentication);

export { createTrpcRouter, publicTrpcProcedure, protectedTrpcProcedure };
