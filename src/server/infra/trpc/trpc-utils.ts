import { createTrpcRouter, baseProcedure } from './trpc';
import { errorHandler, measure } from './middleware';

const trpcProcedure = baseProcedure.use(measure).use(errorHandler);

export { createTrpcRouter, trpcProcedure };
