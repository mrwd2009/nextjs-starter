import { DataSource } from 'typeorm';
import serverConfig from '@/server/config/server-config';
import { mainModels } from '@/server/core/repository-interface/main/models';
import CustomFormattedConsoleLogger from '../utils/custom-formatted-console-logger';

const mainDataSource = new DataSource({
  ...serverConfig.datasource.main,
  synchronize: false,
  cache: false,
  entities: mainModels,
  ...(serverConfig.isServerProd
    ? {}
    : {
        maxQueryExecutionTime: 1,
      }),
  logger: new CustomFormattedConsoleLogger(!serverConfig.isServerProd),
});

const getMainDataSource = async () => {
  if (!mainDataSource.isInitialized) {
    await mainDataSource.initialize();
  }
  return mainDataSource;
};

const getMainEntityManager = async () => {
  const dataSource = await getMainDataSource();
  return dataSource.manager;
};

const mainDataSourceProvider = {
  getObject: async () => {
    return await getMainDataSource();
  },
};

const mainEntityManagerProvider = {
  getObject: async () => {
    return await getMainEntityManager();
  },
};

export type MainDataSourceProviderInterface = typeof mainDataSourceProvider;
export type MainEntityManagerProviderInterface = typeof mainEntityManagerProvider;

export {
  getMainDataSource,
  getMainEntityManager,
  mainDataSourceProvider,
  mainEntityManagerProvider,
};
