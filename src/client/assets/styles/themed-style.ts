'use client';
import { useThemedCustomAntdComponentStyle } from './themed-custom-antd-component-style';
import useThemedSharedStyle from './themed-shared-style';
import { useClassNameInRoot } from '@/client/hooks';

export default function ThemedStyle() {
  const antdStyle = useThemedCustomAntdComponentStyle();
  const sharedStyle = useThemedSharedStyle();

  useClassNameInRoot(antdStyle.className, sharedStyle.className);

  return null;
}
