import apiEndpoints from '@/server/config/api-endpoints';
import serverConfig from '@/server/config/server-config';
import { registerIocDynamicValueComponent } from '@/server/lib/ioc';

declare module '@/server/lib/ioc/ioc-types' {
  interface IocComponentIdStore {
    ServerConfig: IocComponentId;
    ApiEndpoints: IocComponentId;
  }
}

registerIocDynamicValueComponent('ServerConfig', () => {
  return serverConfig;
});

registerIocDynamicValueComponent('ApiEndpoints', () => {
  return apiEndpoints;
});
