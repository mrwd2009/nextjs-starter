'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { FC, useState } from 'react';
import { createStyleRegistry, StyleRegistry } from 'styled-jsx';

const StyledJsxRegistry: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
};

export default StyledJsxRegistry;
