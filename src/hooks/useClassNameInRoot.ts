import { useInsertionEffect } from 'react';

const useClassNameInRoot = (...className: string[]) => {
  useInsertionEffect(() => {
    document.body.classList.add(...className);
    return () => {
      document.body.classList.remove(...className);
    };
  }, [...className]);
};

export default useClassNameInRoot;
