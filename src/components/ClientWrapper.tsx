'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/lib/auth-context';

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}