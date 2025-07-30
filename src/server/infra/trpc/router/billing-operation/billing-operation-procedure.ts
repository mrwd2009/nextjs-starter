import { trpcProcedure } from '../../trpc-utils';
import { z } from 'zod';

export const getBillingInvoiceList = trpcProcedure.input(z.string()).query(async ({ input }) => {
  // throw new LogicError('test error');
  return {
    message: input,
  };
});
