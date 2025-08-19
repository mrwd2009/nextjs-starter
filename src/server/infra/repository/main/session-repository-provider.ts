import { SessionModel } from '@/server/core/repository-interface/main/models';
import { getMainDataSource } from './main-datasource-provider';

export const sessionRepositoryProvider = {
  getObject: async () => {
    const dataSource = await getMainDataSource();
    return dataSource.getRepository(SessionModel);
  },
};

export type SessionRepositoryProviderInterface = typeof sessionRepositoryProvider;
