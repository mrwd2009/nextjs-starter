import { RouteContext, Router } from '../nextjs-utils';
import appProperties from '@/shared/config/app-properties';

function measureHandler(router: Router) {
  router.use(async (request, context, next) => {
    const start = new Date().valueOf();
    const requestId = (context as RouteContext).requestId;
    let hasError = false;
    try {
      return await next();
    } catch (error) {
      hasError = true;
      throw error;
    } finally {
      const end = new Date().valueOf();
      const duration = end - start;
      // for development mode
      if (!appProperties.isProd) {
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
          url = `\x1b[38;2;255;77;79m${request.method} ${request.url} ${durationStr}\x1b[0m`;
        } else {
          url = `\x1b[38;2;82;196;26m${request.method} ${request.url} ${durationStr}\x1b[0m`;
        }
        console.info(
          `\x1b[38;2;0;204;204mResponse Time(${requestId}): \x1b[0m ${url}\n`,
        );
      }
    }
  });
}

export default measureHandler;
