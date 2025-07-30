import ErrorLayout from '@/layouts/ErrorLayout';
import { AppNotFound } from '@/permission/error';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <ErrorLayout>
      <AppNotFound />
    </ErrorLayout>
  );
};

export default NotFound;
