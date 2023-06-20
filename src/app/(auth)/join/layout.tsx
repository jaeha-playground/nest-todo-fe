'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

import * as A from '@/styles/auth.styles';

interface IAuthLayout {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return <div>{children}</div>;
}
