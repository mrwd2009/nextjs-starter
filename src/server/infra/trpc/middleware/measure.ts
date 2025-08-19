import { logger } from '../../logger';
import { createTrpcMiddleware } from '../trpc';
import serverConfig from '@/server/config/server-config';

const measure = createTrpcMiddleware(async ({ next, ctx, type, path }) => {
  const start = new Date().valueOf();
  const requestId = ctx.requestId;
  let hasError = false;
  try {
    const result = await next({
      ctx: {
        ...ctx,
        requestId,
      },
    });
    hasError = !result.ok;
    return result;
  } finally {
    const end = new Date().valueOf();
    const duration = end - start;
    // for development mode
    if (!serverConfig.isServerProd) {
      let durationStr = '';
      // highlight long request
      if (duration > 200) {
        durationStr = `\x1b[38;2;205;0;205m(${duration}ms)\x1b[0m`;
      } else {
        durationStr = `(${duration}ms)`;
      }

      let url = '';
      // hilight error request
      if (hasError) {
        url = `\x1b[38;2;255;77;79m${type} ${path} ${durationStr}\x1b[0m`;
      } else {
        url = `\x1b[38;2;82;196;26m${type} ${path} ${durationStr}\x1b[0m`;
      }
      console.info(`\x1b[38;2;0;204;204mResponse Time(${requestId}): \x1b[0m ${url}\n`);
    } else {
      logger.info(
        {
          requestId,
          category: 'profiler',
          durationMs: duration,
        },
        `${type} ${path}`,
      );
    }
  }
});

export default measure;
