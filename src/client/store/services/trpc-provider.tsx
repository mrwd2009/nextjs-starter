'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import trpc, { queryClient, trpcClient } from './trpc';

function TrpcProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;
