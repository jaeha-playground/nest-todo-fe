'use client';

import React from 'react';
import Link from 'next/link';

import { Button } from '@mui/material';

export default function page() {
  return (
    <div>
      <Link href={'/todos/edit'}>
        <Button variant="outlined">글 편집하기</Button>
      </Link>
      create Todo
    </div>
  );
}
