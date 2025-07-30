import { useAntdStaticToolsInitializer } from '@/lib/antd-static-tools';
import { useGlobalStyleInitializer } from './useGlobalStyleInitializer';

export const useAppInitializer = () => {
  useAntdStaticToolsInitializer();
  useGlobalStyleInitializer();
};
