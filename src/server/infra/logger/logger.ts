import serverConfig from '@/server/config/server-config';
import pino from 'pino';

const logger = pino({
  ...(serverConfig.isServerProd
    ? {}
    : {
        transport: {
          target: 'pino-pretty',
        },
      }),
});

export type LoggerInterface = typeof logger;

export default logger;
