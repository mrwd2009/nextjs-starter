import { useRef, useEffect, useState } from 'react';

export const useMounted = () => {
  const isMountedRef = useRef(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    isMountedRef.current = true;
    setIsMounted(true);
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return {
    isMounted,
    isMountedRef,
  };
};

export default useMounted;
