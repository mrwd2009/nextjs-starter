import { NextResponse } from 'next/server';
import { Router } from '../nextjs-utils';

function errorHandler(router: Router) {
  router.use(async (request, context, next) => {
    try {
      return await next();
    } catch (error) {
      console.log('from error handler');
      console.error(error);
      return NextResponse.json(
        {
          error: (error as Error).message,
        },
        {
          status: 500,
        },
      );
    }
  });
}

export default errorHandler;
