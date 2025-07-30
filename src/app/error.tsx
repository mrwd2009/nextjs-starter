'use client';

import ErrorLayout from '@/layouts/ErrorLayout';
import { AppError } from '@/permission/error';
import { FC, useEffect } from 'react';

const ErrorPage: FC<{ error: Error }> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <ErrorLayout>
      <AppError />
    </ErrorLayout>
  );
};

export default ErrorPage;
