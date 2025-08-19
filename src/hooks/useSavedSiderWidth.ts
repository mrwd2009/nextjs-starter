import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const useSavedSiderWidth = (savedKey: string, initWidth: string = '260px') => {
  const [{ initialWidth: rawInitialWidth, saveWidth: rawSaveWidth }] = useState(() => {
    const saveWidth = debounce((width: string) => {
      localStorage.setItem(savedKey, width);
    }, 300);
    const getWidth = (width: string) => {
      return parseInt(width.slice(0, -2), 10);
    };
    const initialWidth = getWidth(localStorage.getItem(savedKey) || initWidth);
    return {
      saveWidth,
      initialWidth,
    };
  });

  const [initialWidth, setInitialWidth] = useState(rawInitialWidth);
  const saveWidth = useCallback(
    (width: string) => {
      setInitialWidth(parseInt(width.slice(0, -2), 10));
      rawSaveWidth(width);
    },
    [rawSaveWidth],
  );

  return {
    initialWidth,
    saveWidth,
  };
};
