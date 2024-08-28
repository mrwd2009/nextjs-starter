import { z } from 'zod';
import { publicProcedure } from '../../trpc-utils';

export const invoiceTemplateList = publicProcedure
  .input(z.string())
  .query(async (options) => {
    return options.input + ' invoice template list.';
  });
