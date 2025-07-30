import { useInsertionEffect } from 'react';

export const useClassNameInRoot = (...className: string[]) => {
  useInsertionEffect(() => {
    document.body.classList.add(...className);
    return () => {
      document.body.classList.remove(...className);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...className]);
};
