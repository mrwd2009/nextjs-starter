'use client';
import { FC } from 'react';
import { useAppInitializer } from './hooks/useAppInitializer';

export const AppInitializerHookWrapper: FC = () => {
  useAppInitializer();
  return null;
};
