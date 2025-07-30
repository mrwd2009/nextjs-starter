import { useThemedGlobalStyle } from '@/assets/styles/useThemedGlobalStyle';
import { useClassNameInRoot } from '@/hooks';

export const useGlobalStyleInitializer = () => {
  const { mainClassName } = useThemedGlobalStyle();
  useClassNameInRoot(mainClassName);
};
