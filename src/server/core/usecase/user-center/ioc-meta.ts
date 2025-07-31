import { registerIocComponent } from '@/server/lib/ioc';
import { UserCenterUseCase } from './user-center-use-case';

declare module '@/server/lib/ioc/ioc-types' {
  interface IocComponentIdStore {
    UserCenterUseCase: IocComponentId;
  }
}

registerIocComponent('UserCenterUseCase', UserCenterUseCase);
