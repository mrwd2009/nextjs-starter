import { NextResponse } from 'next/server';
import { Router } from '../nextjs-utils';
import appProperties from '@/shared/config/app-properties';
import { logger } from '../../logger';
import GatewayError from '@/server/lib/error';

function errorHandler(router: Router) {
  router.use(async (request, context, next) => {
    try {
      return await next();
    } catch (error) {
      if (!appProperties.isProd) {
        console.error(
          `\x1b[38;2;255;77;79mError occurred at request: ${request.method} ${request.url}\x1b[0m`,
        );
        console.error(`\x1b[38;2;255;77;79m${(error as Error).stack}\x1b[0m\n`);
      } else {
        logger.error(
          error,
          `Error occurred at request: ${request.method} ${request.url}`,
        );
      }

      if (error instanceof GatewayError) {
        switch (error.code) {
          case 'AuthError': {
            return NextResponse.json(
              {
                error: {
                  message: error.message,
                },
              },
              { status: 401 },
            );
          }
          case 'DataError':
          case 'GatewayError':
          case 'LogicError':
          case 'LockError':
          case 'ParamError': {
            return NextResponse.json(
              {
                error: {
                  message: error.message,
                },
              },
              { status: 400 },
            );
          }
          case 'ForbiddenError': {
            return NextResponse.json(
              {
                error: {
                  message: error.message,
                },
              },
              { status: 403 },
            );
          }
        }
      }

      return NextResponse.json(
        {
          error: {
            message: appProperties.isProd
              ? 'Internal Error'
              : (error as Error).message,
          },
        },
        {
          status: 500,
        },
      );
    }
  });
}

export default errorHandler;
