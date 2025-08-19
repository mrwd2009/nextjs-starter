import { registerIocDynamicValueComponent } from '@/server/lib/ioc';
import { sessionRepositoryProvider } from './main/session-repository-provider';
import { userRepositoryProvider } from './main/user-repository-provider';
import { mainDataSourceProvider, mainEntityManagerProvider } from './main/main-datasource-provider';

declare module '@/server/lib/ioc/ioc-types' {
  interface IocComponentIdStore {
    SessionRepositoryProvider: IocComponentId;
    UserRepositoryProvider: IocComponentId;
    MainDataSourceProvider: IocComponentId;
    MainEntityManagerProvider: IocComponentId;
  }
}

registerIocDynamicValueComponent('SessionRepositoryProvider', () => {
  return sessionRepositoryProvider;
});
registerIocDynamicValueComponent('UserRepositoryProvider', () => {
  return userRepositoryProvider;
});
registerIocDynamicValueComponent('MainDataSourceProvider', () => {
  return mainDataSourceProvider;
});
registerIocDynamicValueComponent('MainEntityManagerProvider', () => {
  return mainEntityManagerProvider;
});
