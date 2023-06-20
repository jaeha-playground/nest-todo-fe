'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IExtraProviders {
  children: React.ReactNode;
}

export default function ExtraProviders({ children }: IExtraProviders) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
