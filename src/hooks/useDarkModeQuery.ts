import { DARK_THEME, SYSTEM_THEME } from '@/layouts/shared/theme/theme-constants';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';

export const useDarkModeQuery = () => {
  const { theme, resolvedTheme } = useTheme();

  const isDarkMode = useMemo(() => {
    return theme === DARK_THEME || (theme === SYSTEM_THEME && resolvedTheme === DARK_THEME);
  }, [theme, resolvedTheme]);

  return { isDarkMode };
};
