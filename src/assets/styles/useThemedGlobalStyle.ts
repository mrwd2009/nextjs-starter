import { css } from '@emotion/css';
import { theme } from 'antd';

export const useThemedGlobalStyle = () => {
  const { token } = theme.useToken();

  const mainClassName = css(`
    body& {
      background-color: ${token.colorBgLayout};
      color: ${token.colorText};
    }
  `);

  return { mainClassName };
};
