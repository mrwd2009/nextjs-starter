import { css } from '@emotion/css';

export const useStyle = () => {
  const mainClassName = css(`
    .app-ex-panel {
      &__card {
        padding: 0;
        box-shadow: none;
    
        > .ant-card-head {
          > .ant-tabs {
            > .ant-tabs-nav {
              height: 36px;
            }
          }
        }
    
        &.no-tabs {
          > .ant-card-head {
            > .ant-card-head-wrapper {
              height: 35px;
            }
          }
        }
      }
    }
  `);

  return {
    mainClassName,
  };
};
