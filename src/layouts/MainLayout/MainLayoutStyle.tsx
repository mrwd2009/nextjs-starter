'use client';
import { globalThemeToken } from '@/assets/styles';
import { theme } from 'antd';
import { FC } from 'react';

const MainLayoutStyle: FC = () => {
  const { token } = theme.useToken();
  return (
    <style jsx global>{`
      .app-ex-layout-main {
        .app-ex-collapsible-split-pane-head {
          margin-bottom: 0;
        }

        .app-ex-layout-main__content {
          background: ${token.colorBgContainer};
        }

        .app-ex-collapsible-split-pane__sider.left {
          padding-right: ${globalThemeToken.layoutContentPadding}px;

          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-right: 0;
            }

            > .ant-card-body {
              padding-right: 0;
            }
          }
        }

        .app-ex-collapsible-split-pane__sider.right {
          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-left: 0;
            }

            > .ant-card-body {
              padding-left: 0;
            }
          }
        }

        .app-ex-collapsible-split-pane__content.left {
          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-left: 0;
            }

            > .ant-card-body {
              padding-left: 0;
            }
          }

          > .ant-spin-nested-loading > .ant-spin-container {
            > .app-ex-panel > .ant-card {
              > .ant-card-head {
                padding-left: 0;
              }

              > .ant-card-body {
                padding-left: 0;
              }
            }
          }
        }

        .app-ex-collapsible-split-pane__content.right {
          > .app-ex-panel > .ant-card {
            > .ant-card-head {
              padding-right: 0;
            }

            > .ant-card-body {
              padding-right: 0;
            }
          }

          > .ant-spin-nested-loading > .ant-spin-container {
            > .app-ex-panel > .ant-card {
              > .ant-card-head {
                padding-right: 0;
              }

              > .ant-card-body {
                padding-right: 0;
              }
            }
          }
        }
      }
    `}</style>
  );
};

export default MainLayoutStyle;
