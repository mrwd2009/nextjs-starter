import { TRPCError } from '@trpc/server';
import _ from 'lodash';
import { _middleware } from '../trpc';
import appProperties from '@/shared/config/app-properties';
import { logger } from '../../logger';
import GatewayError from '@/server/lib/error';

const errorHandler = _middleware(async ({ next, type, path, getRawInput }) => {
  const processError = async (error: Error) => {
    if (!appProperties.isProd) {
      console.error(
        `\x1b[38;2;255;77;79mError occurred at request: ${type} ${path}\x1b[0m`,
      );
      const input = await getRawInput();
      if (!_.isEmpty(input)) {
        console.error(`\x1b[38;2;0;204;204mInput Parameters:\x1b[0m`);
        console.error(
          `\x1b[38;2;82;196;26m${JSON.stringify(input, null, 2)}\x1b[0m`,
        );
      }
      console.error(`\x1b[38;2;255;77;79m${error.stack}\x1b[0m\n`);
    } else {
      logger.error(error, `Error occurred at request: ${type} ${path}`);
    }

    if (error instanceof TRPCError) {
      const cause = error.cause;
      if (cause && cause instanceof GatewayError) {
        switch (cause.code) {
          case 'AuthError': {
            throw new TRPCError({
              code: 'UNAUTHORIZED',
              message: cause.message,
            });
          }
          case 'DataError':
          case 'GatewayError':
          case 'LogicError':
          case 'LockError':
          case 'ParamError': {
            throw new TRPCError({
              code: 'BAD_REQUEST',
              message: cause.message,
            });
          }
          case 'ForbiddenError': {
            throw new TRPCError({
              code: 'FORBIDDEN',
              message: cause.message,
            });
          }
          default: {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: appProperties.isProd ? 'Internal Error' : cause.message,
            });
          }
        }
      }
    }
  };
  try {
    const result = await next();
    if (!result.ok) {
      await processError(result.error);
      throw result.error;
    }
    return result;
  } catch (error) {
    await processError(error as Error);
    throw error;
  }
});

export default errorHandler;
