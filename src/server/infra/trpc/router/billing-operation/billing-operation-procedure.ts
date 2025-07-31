// import { ForbiddenError, LogicError } from '@/server/lib/error';
import { publicTrpcProcedure } from '../../trpc-utils';
import { z } from 'zod';

export const getBillingInvoiceList = publicTrpcProcedure
  .input(z.string())
  .query(async ({ input }) => {
    // throw new ForbiddenError('test error 11111');
    return {
      message: input,
    };
  });

export const getBillingReportList = publicTrpcProcedure
  .input(z.string())
  .query(async ({ input }) => {
    // throw new ForbiddenError('test error 11222111');
    return {
      message: input,
    };
  });
