'use client';

import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface IAuthLayout {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
