'use client';

import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@mui/material';

interface IAuthLayout {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <div>
      <Navbar />
      {children}
      <Button color="primary" variant="outlined">
        neutral
      </Button>
    </div>
  );
}
