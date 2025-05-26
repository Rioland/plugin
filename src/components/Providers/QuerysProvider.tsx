"use client"
// react query provider for the application
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

export default function QuerysProvider({ children }: { children?: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
