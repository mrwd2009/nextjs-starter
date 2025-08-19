import { useAntdStaticToolsInitializer } from '@/lib/antd-static-tools';
import { useGlobalCssInJsStyleInitializer } from './useGlobalCssInJsStyleInitializer';
import { useDayjsInitializer } from './useDayjsInitializer';
import { useClientRouterUtilsInitializer } from '@/lib/client-router-utils';
import { useComponentsCssInJsStyleInitializer } from '@/components/style';

export const useAppInitializer = () => {
  useDayjsInitializer();
  useAntdStaticToolsInitializer();
  useGlobalCssInJsStyleInitializer();
  useComponentsCssInJsStyleInitializer();
  useClientRouterUtilsInitializer();
};
