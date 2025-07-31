import { useAntdStaticToolsInitializer } from '@/lib/antd-static-tools';
import { useGlobalStyleInitializer } from './useGlobalStyleInitializer';
import { useDayjsInitializer } from './useDayjsInitializer';

export const useAppInitializer = () => {
  useDayjsInitializer();
  useAntdStaticToolsInitializer();
  useGlobalStyleInitializer();
};
