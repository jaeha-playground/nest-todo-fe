'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

import * as A from '@/styles/auth.styles';
import { TextField } from '@mui/material';

export default function page() {
  return (
    <A.Wrapper>
      <Navbar />
      <A.MainWrapper>
        <h2>Create Your Account</h2>
        <form>
          <TextField label="Email" variant="outlined" />
          <TextField label="Nickname" variant="outlined" />
          <TextField label="Password" variant="outlined" />
        </form>
      </A.MainWrapper>
    </A.Wrapper>
  );
}
