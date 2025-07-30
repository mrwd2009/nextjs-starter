import { FC } from 'react';
import Image from 'next/image';
import LayoutFooter from '../shared/LayoutFooter';
import bgImage from '@/assets/images/bg/lake-2500.jpg';
import ErrorLayoutHeader from './ErrorLayoutHeader';

const ErrorLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex min-h-svh flex-col">
      <div className="absolute inset-0 -z-10 dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:bg-black/40 dark:after:content-['']">
        <Image src={bgImage} alt="Lake" className="h-full w-full object-cover object-center" />
      </div>
      <ErrorLayoutHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default ErrorLayout;
