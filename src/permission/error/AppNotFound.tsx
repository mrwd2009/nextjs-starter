'use client';
import { fade } from '@/assets/styles/style-utils';
import { theme } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

const AppNotFound: FC = () => {
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
        404
      </h1>
      <h2 className="mb-6 text-[32px] tracking-[3px]">OOPS! NOTHING WAS FOUND</h2>
      <p className="mt-0 mb-6 text-[16px]">
        The page you are looking for might have been removed, had its name changed or is temporarily
        unavailable. &nbsp;
        <Link
          href="/"
          style={{
            color: token.colorPrimary,
          }}
        >
          Return to homepage
        </Link>
      </p>
    </div>
  );
};

export default AppNotFound;
