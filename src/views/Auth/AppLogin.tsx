'use client';
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import Image from 'next/image';
import brandLogo from '@/assets/images/brand.png';
import cfexLogo from '@/assets/images/logo192.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import LoginStyle from './LoginStyle';
import { useTRPC } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getRouteInfo } from '@/config/client-routes';

const billingCenterRoute = getRouteInfo('billingCenter');

const AppLogin: FC = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const { mutateAsync: loginInDev, isPending } = useMutation(
    trpc.userCenter.loginInDev.mutationOptions(),
  );
  return (
    <div className="app-ex-auth">
      <LoginStyle />
      <div className="app-ex-auth--logo">
        <Image src={brandLogo} alt="CFEX" height={52} />
        <Typography.Title>CFEX Partner Portal</Typography.Title>
      </div>
      <Form size="large" layout="vertical">
        {process.env.NODE_ENV === 'development' ? (
          <>
            <Form.Item name="email">
              <Input
                id="username"
                name="username"
                type="email"
                autoComplete="on"
                maxLength={50}
                prefix={<UserOutlined style={{ marginRight: 4 }} />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                id="password"
                name="password"
                autoComplete="on"
                maxLength={50}
                prefix={<LockOutlined style={{ marginRight: 4 }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isPending}
                onClick={() => {
                  loginInDev({
                    email: 'ui-local-test@cfexcloud.com',
                  }).then(() => {
                    router.push(billingCenterRoute!.pathname);
                  });
                }}
              >
                Login
              </Button>
            </Form.Item>
            <Form.Item name="remember" noStyle valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </>
        ) : null}
        <Divider dashed />
        <Form.Item>
          <Button
            block
            htmlType="button"
            icon={<Image src={cfexLogo} alt="cfex" width={20} height={20} className="mr-2" />}
          >
            Sign In with CFEX Account
          </Button>
        </Form.Item>
        {process.env.NODE_ENV === 'development' ? (
          <Form.Item>
            <Typography.Link>Forgot Password?</Typography.Link>
          </Form.Item>
        ) : null}
      </Form>
    </div>
  );
};

export default AppLogin;
