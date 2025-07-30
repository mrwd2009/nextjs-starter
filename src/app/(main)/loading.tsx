import ModuleLoadingIndicator from '@/components/ModuleLoadingIndicator';
import { FC } from 'react';

const MainLoading: FC = () => {
  return (
    <div className="pt-12 text-center">
      <ModuleLoadingIndicator />
    </div>
  );
};

export default MainLoading;
