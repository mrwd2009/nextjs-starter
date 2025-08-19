import { registerIocDynamicValueComponent } from '@/server/lib/ioc';
import logger from './logger';

declare module '@/server/lib/ioc/ioc-types' {
  interface IocComponentIdStore {
    Logger: IocComponentId;
  }
}

registerIocDynamicValueComponent('Logger', () => {
  return logger;
});
