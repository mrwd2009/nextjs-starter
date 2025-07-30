'use client';
import { useTRPCClient } from '@/hooks';
import { useCurrentUserInfoStore } from '@/store';
import { Skeleton } from 'antd';
import { FC, useEffect } from 'react';

const RouteGuarder: FC<{ children: React.ReactNode }> = ({ children }) => {
  const trpcClient = useTRPCClient();
  const { userEmail, updateUserInfo } = useCurrentUserInfoStore((state) => state);

  useEffect(() => {
    trpcClient.userCenter.getUserInfo.query().then((res) => {
      updateUserInfo({
        userEmail: res.userEmail,
        userName: res.userName,
        userRoles: res.userRoles,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userEmail) {
    return (
      <div className="p-8">
        <Skeleton
          active
          avatar
          loading
          paragraph={{
            rows: 6,
          }}
          round
          title
        />
      </div>
    );
  }
  return children;
};

export default RouteGuarder;
