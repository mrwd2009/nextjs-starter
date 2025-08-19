import { UserModel } from '@/server/core/repository-interface/main/models';
import { getMainDataSource } from './main-datasource-provider';

export const userRepositoryProvider = {
  getObject: async () => {
    const dataSource = await getMainDataSource();
    return dataSource.getRepository(UserModel);
  },
};

export type UserRepositoryProviderInterface = typeof userRepositoryProvider;
