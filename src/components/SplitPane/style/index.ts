import { globalThemeToken } from '@/assets/styles';
import { css } from '@emotion/css';
import { theme } from 'antd';

export const useStyle = () => {
  const { token } = theme.useToken();

  const mainClassName = css(`
    .app-ex-pane-resizer {
      background: ${token.colorBorder};
      background-clip: padding-box;

      &:hover {
        transition: all ${globalThemeToken.animationDurationSlow} ${globalThemeToken.easeInOut};
      }

      &.app-ex-h-pane-resizer {
        width: 100%;
        height: 5px;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        cursor: row-resize;

        &:hover {
          border-top: 2px solid ${token.colorBorderSecondary};
          border-bottom: 2px solid ${token.colorBorderSecondary};
        }

        &.disabled {
          cursor: not-allowed;
        }

        &.disabled:hover {
          border-color: transparent;
        }
      }

      &.app-ex-v-pane-resizer {
        width: 5px;
        border-right: 2px solid transparent;
        border-left: 2px solid transparent;
        cursor: col-resize;

        &:hover {
          border-right: 2px solid ${token.colorBorderSecondary};
          border-left: 2px solid ${token.colorBorderSecondary};
        }

        &.disabled {
          cursor: not-allowed;
        }

        &.disabled:hover {
          border-color: transparent;
        }
      }
    }

    .app-ex-split-pane-col {
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      outline: none;
      user-select: text;
    }

    .app-ex-split-pane-row {
      display: flex;
      flex: 1;
      flex-direction: row;
      height: 100%;
      overflow: hidden;
      outline: none;
      user-select: text;
    }
  `);

  return {
    mainClassName,
  };
};
