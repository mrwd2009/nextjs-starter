import { FC, memo, ReactNode, useState } from 'react';
import { Card, Popover, Avatar, Button, Spin, theme } from 'antd';
import Icon, { LogoutOutlined } from '@ant-design/icons';
import UserIcon from '@/assets/images/user/user.svg';
import EnergyIcon from '@/assets/images/user/green-energy.svg';
import { useCurrentUserInfoStore } from '@/store';
import { globalThemeToken } from '@/assets/styles';
import { useTRPC } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getRouteInfo } from '@/config/client-routes';

const UserAction: FC = () => {
  const { userEmail, userName, userPicture, resetUserInfo } = useCurrentUserInfoStore(
    (state) => state,
  );
  const [visible, setVisible] = useState(false);
  const { token } = theme.useToken();
  const trpc = useTRPC();
  const { mutateAsync: logoutUser, isPending: isLoggingOut } = useMutation(
    trpc.userCenter.logoutUser.mutationOptions(),
  );
  const router = useRouter();

  const handleLogout = () => {
    logoutUser().then(() => {
      resetUserInfo();
      const loginRoute = getRouteInfo('login');
      const loginLandingRoute = getRouteInfo('loginLanding');
      router.push(
        process.env.NODE_ENV === 'development' ? loginRoute!.pathname : loginLandingRoute!.pathname,
      );
    });
  };

  const actions = [
    <span
      role="button"
      key="logout"
      tabIndex={0}
      className="text-nowrap"
      onClick={() => {
        handleLogout();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleLogout();
        }
      }}
    >
      &nbsp;
      <LogoutOutlined />
      &nbsp;Sign Out
    </span>,
  ];

  let cardAvatar: ReactNode = null;
  if (userPicture) {
    cardAvatar = (
      <div
        className="app-ex-user-avatar"
        style={{
          backgroundImage: `url(${userPicture})`,
        }}
      />
    );
  } else {
    cardAvatar = <Avatar size={64} icon={<Icon component={EnergyIcon} />} />;
  }

  const content = (
    <Spin spinning={isLoggingOut}>
      <Card
        size="small"
        className="app-ex-user-action-content"
        variant="borderless"
        actions={actions}
      >
        <Card.Grid className="app-ex-user-action-grid">
          <Card.Meta title={userName} avatar={cardAvatar} description={userEmail} />
        </Card.Grid>
      </Card>
    </Spin>
  );

  let btn: ReactNode = null;
  if (userPicture) {
    btn = (
      <div
        className="app-ex-user-avatar clickable"
        style={{
          backgroundImage: `url(${userPicture})`,
          backgroundRepeat: 'no-repeat',
        }}
      />
    );
  } else {
    btn = <Button type="primary" icon={<Icon component={UserIcon} />} shape="circle" />;
  }

  btn = (
    <div className="flex cursor-pointer flex-col">
      <div className={`flex items-center justify-center`}>{btn}</div>
    </div>
  );

  return (
    <Popover
      content={content}
      placement="bottomRight"
      trigger="click"
      open={visible}
      onOpenChange={setVisible}
    >
      <span className="app-ex-user-action">{btn}</span>
      <style jsx global>{`
        .app-ex-user-action {
          display: flex;
          align-items: center;

          .ant-btn {
            min-width: 0 !important;
            width: ${globalThemeToken.layoutAvatarSize}px;
            height: ${globalThemeToken.layoutAvatarSize}px;

            svg {
              font-size: ${globalThemeToken.layoutAvatarFontSize}px;
            }
          }
        }

        .app-ex-user-avatar {
          display: inline-block;
          width: ${globalThemeToken.layoutAvatarSizeLarge}px;
          height: ${globalThemeToken.layoutAvatarSizeLarge}px;
          background-color: ${token.colorFillTertiary};
          background-position: center;
          background-size: contain;
          border-radius: 50%;

          &.clickable {
            width: ${globalThemeToken.layoutAvatarSize}px;
            height: ${globalThemeToken.layoutAvatarSize}px;
            cursor: pointer;
          }
        }

        .app-ex-user-action-content {
          min-width: 140px;
          box-shadow: none !important;
          background: none;

          .ant-card-grid {
            width: 100%;
            padding: 12px;
          }

          .ant-card-actions {
            border-top: none;
            margin-bottom: -8px;
            background: none;
          }
        }

        .app-ex-user-action-grid:not(:hover) {
          box-shadow: 0 1px 0 0 ${token.colorSplit} !important;
        }
        .app-ex-user-action-grid {
          .ant-avatar {
            background-color: ${token.colorPrimary};
          }
        }
      `}</style>
    </Popover>
  );
};

export default memo(UserAction);
