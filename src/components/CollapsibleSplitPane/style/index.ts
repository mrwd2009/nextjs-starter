import { css } from '@emotion/css';
import { theme } from 'antd';
import { globalThemeToken } from '@/assets/styles';

export const useStyle = () => {
  const { token } = theme.useToken();
  const mainClassName = css(`
    .app-ex-collapsible-split-pane {
      > div {
        position: relative;
      }

      &__sider {
        width: 100%;
        padding: 0;
        overflow: auto;
        transition: all 0.3s ease-in-out;

        .ant-collapse.ant-collapse-ghost > .ant-collapse-item > .ant-collapse-header {
          padding-right: 0;
          padding-left: 0;
        }

        .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
          padding: 0 8px 8px;
        }

        &.left {
          padding-right: ${globalThemeToken.layoutContentPadding}px;

          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }

            > .ant-card-body {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }
          }
        }

        &.right {
          padding-left: ${globalThemeToken.layoutContentPadding}px;

          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }

            > .ant-card-body {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }
          }
        }

        &.inline {
          visibility: hidden;
          opacity: 0;
        }
      }

      &__toggle {
        position: absolute;
        line-height: 15px;

        .ant-btn-icon {
          position: relative;
          top: -1px;
        }

        &.left {
          top: 27px;
          right: -11px;
          z-index: 1;
          width: 16px;
          min-width: 16px;
          height: 16px;
        }

        &.right {
          top: 27px;
          left: -11px;
          z-index: 1;
          width: 16px;
          min-width: 16px;
          height: 16px;
        }
      }

      &__content {
        width: 100%;
        padding: 0;

        &.left {
          padding-left: ${globalThemeToken.layoutContentPadding}px;

          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }

            > .ant-card-body {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }
          }

          > .ant-spin-nested-loading > .ant-spin-container {
            > .app-ex-panel > .ant-card {
              > .ant-card-head {
                padding-right: ${globalThemeToken.layoutContentPadding}px;
                padding-left: ${globalThemeToken.layoutContentPadding}px;
              }

              > .ant-card-body {
                padding-right: ${globalThemeToken.layoutContentPadding}px;
                padding-left: ${globalThemeToken.layoutContentPadding}px;
              }
            }
          }
        }

        &.right {
          padding-right: ${globalThemeToken.layoutContentPadding}px;

          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }

            > .ant-card-body {
              padding-right: ${globalThemeToken.layoutContentPadding}px;
              padding-left: ${globalThemeToken.layoutContentPadding}px;
            }
          }

          > .ant-spin-nested-loading > .ant-spin-container {
            > .app-ex-panel > .ant-card {
              > .ant-card-head {
                padding-right: ${globalThemeToken.layoutContentPadding}px;
                padding-left: ${globalThemeToken.layoutContentPadding}px;
              }

              > .ant-card-body {
                padding-right: ${globalThemeToken.layoutContentPadding}px;
                padding-left: ${globalThemeToken.layoutContentPadding}px;
              }
            }
          }
        }
      }
    }

    .app-ex-collapsible-split-pane-head {
      display: flex;
      align-items: center;
      background: ${token.colorBgContainer};
      min-height: ${globalThemeToken.minCardHeaderHeight}px;
      padding: 0 ${globalThemeToken.layoutContentPadding}px;
      color: ${token.colorTextHeading};
      font-weight: ${token.fontWeightStrong};
      font-size: ${token.fontSize}px;
      border-bottom: ${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusLG}px;
      margin-bottom: 6px;

      &__title {
        flex: auto;
      }

      &__extra {
        flex: none;
      }
    }

    .app-ex-collapsible-split-pane-wrapper {
      min-height: ${globalThemeToken.layoutCalcMinContentHeight};
      display: flex;
      flex-direction: column;
    }
  `);

  return {
    mainClassName,
  };
};
