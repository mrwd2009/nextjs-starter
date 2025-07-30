'use client';
import { fade } from '@/assets/styles/style-utils';
import { theme, Typography } from 'antd';
import { FC } from 'react';

const AppError: FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      className="mx-auto my-9 w-full max-w-[767px] p-4 text-center leading-[1.4] backdrop-blur-xs backdrop-saturate-180"
      style={{
        backgroundColor: fade(token.colorBgLayout, 0.9),
        borderRadius: token.borderRadius,
      }}
    >
      <h1
        className="mb-6 text-[186px] text-transparent"
        style={{
          backgroundImage: `linear-gradient(130deg, rgb(63, 153, 246), ${token.colorPrimary})`,
          backgroundClip: 'text',
        }}
      >
        ERROR
      </h1>
      <h2 className="mb-6 text-[32px] tracking-[3px]">OOPS! SOMETHING WENT WRONG</h2>
      <p className="mt-0 mb-6 text-[16px]">
        We keep track of these errors, but feel free to contact us if refreshing doesn&apos;t fix
        things. &nbsp;
        <Typography.Link
          style={{
            fontSize: token.fontSizeLG,
            color: token.colorPrimary,
          }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </Typography.Link>
      </p>
    </div>
  );
};

export default AppError;
