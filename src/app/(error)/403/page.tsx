import { AppForbidden } from '@/permission/error';
import { FC } from 'react';

const Forbidden: FC = () => {
  return <AppForbidden />;
};

export default Forbidden;
