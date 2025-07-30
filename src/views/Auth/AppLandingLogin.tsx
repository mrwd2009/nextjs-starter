'use client';
import { Button, Divider, Form, Typography } from 'antd';
import { FC } from 'react';
import Image from 'next/image';
import brandLogo from '@/assets/images/brand.png';
import cfexLogo from '@/assets/images/logo192.png';
import LoginStyle from './LoginStyle';

const AppLandingLogin: FC = () => {
  return (
    <div className="app-ex-auth">
      <LoginStyle />
      <div className="app-ex-auth--logo">
        <Image src={brandLogo} alt="CFEX" height={52} />
        <Typography.Title>CFEX Partner Portal</Typography.Title>
      </div>
      <Form size="large" layout="vertical">
        <Form.Item>
          <span className="ant-form-text text-center">
            The login credentials are centrally managed by CFEX Carbon Free Energy Cloud, please
            login from CFEX Carbon Free Energy Cloud.
          </span>
        </Form.Item>
        <Divider dashed />
        <Form.Item>
          <Button
            block
            htmlType="button"
            icon={<Image src={cfexLogo} alt="cfex" width={20} height={20} className="mr-2" />}
          >
            Open CFEX Carbon Free Energy Cloud
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppLandingLogin;
