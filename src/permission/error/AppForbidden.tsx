'use client';
import { fade } from '@/assets/styles/style-utils';
import { theme } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

const AppForbidden: FC = () => {
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
        403
      </h1>
      <h2 className="mb-6 text-[32px] tracking-[3px]">ACCESS NOT GRANTED!</h2>
      <p className="mt-0 mb-6 text-[16px]">
        Sorry, it&apos;s not allowed to go beyond this point!&nbsp;
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

export default AppForbidden;
