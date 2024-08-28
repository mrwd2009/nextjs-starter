import { z } from 'zod';
import { publicProcedure } from '../../trpc-utils';
import { ParamError } from '@/server/lib/error';

export const emailTemplateList = publicProcedure
  .input(z.string())
  .query(async (options) => {
    if (options.input === 'test') {
      throw new ParamError('test');
    }
    return options.input + ' email template list.';
  });
