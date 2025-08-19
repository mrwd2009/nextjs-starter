'use client';
import { FC, memo } from 'react';
import { Breadcrumb, theme } from 'antd';
import map from 'lodash/map';
import { HomeOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import { getRouteBC } from '@/config/client-routes';
import { fade } from '@/assets/styles/style-utils';
import { globalThemeToken } from '@/assets/styles';

const BC: FC = () => {
  const pathname = usePathname();
  const bcList = getRouteBC(pathname);
  const { token } = theme.useToken();

  return (
    <div className="app-ex-breadcrumb">
      <div className="app-ex-breadcrumb--bc">
        <Breadcrumb
          items={[
            {
              key: 'home',
              title: <HomeOutlined />,
            },
            ...map(bcList, (bc) => {
              return {
                key: bc.key,
                title: bc.title,
              };
            }),
          ]}
        />
      </div>
      <div className="app-ex-breadcrumb--extra"></div>
      <style jsx>{`
        .app-ex-breadcrumb {
          display: flex;
          padding: 0 ${globalThemeToken.layoutHorizontalPadding}px;
          flex: none;
          align-items: center;
          justify-content: space-between;
          height: ${globalThemeToken.layoutBcHeight}px;

          .app-ex-breadcrumb--bc {
            padding: 0 ${token.paddingXS}px;
            background-color: ${fade(token.colorBgLayout, 0.7)};
            border-radius: ${token.borderRadius}px;
          }

          .app-ex-breadcrumb--extra {
            background-color: ${fade(token.colorBgLayout, 0.7)};
            border-radius: ${token.borderRadius}px;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(BC);
