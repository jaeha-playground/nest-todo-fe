'use client';

import TodoLists from '@/components/Todos/TodoLists';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      <Link href={'/todos/create'}>
        <Button variant="outlined">글 작성하기</Button>
      </Link>
      <Link href={'/todos/edit'}>
        <Button variant="outlined">글 편집하기</Button>
      </Link>
      <h1>내가 작성한 글 전체 보기</h1>
      <TodoLists />
    </div>
  );
}
