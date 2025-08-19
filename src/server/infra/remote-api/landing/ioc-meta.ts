import { registerIocComponent } from '@/server/lib/ioc';
import LandingRemoteApi from './landing-remote-api';

declare module '@/server/lib/ioc/ioc-types' {
  interface IocComponentIdStore {
    LandingRemoteApi: IocComponentId;
  }
}
registerIocComponent('LandingRemoteApi', LandingRemoteApi);
