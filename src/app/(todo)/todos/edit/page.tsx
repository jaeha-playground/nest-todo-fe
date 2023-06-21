'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      <Link href={'/todos'}>
        <Button variant="outlined">글 전체보기</Button>
      </Link>
      <Link href={'/todos/create'}>
        <Button variant="outlined">글 작성하기</Button>
      </Link>
      todos
    </div>
  );
}
