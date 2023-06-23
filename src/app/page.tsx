'use client';

import React from 'react';
import Link from 'next/link';

import { useMeAPI } from '@/apis/auth';
import { Button } from '@mui/material';

export default function page() {
  const { data, isLoading } = useMeAPI();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!isLoading && data) {
    console.log('data>>>', data);
  }

  return (
    <div>
      <h1>Home 화면</h1>
      <Link href={'/todos'}>
        <Button variant="outlined">글 전체보기</Button>
      </Link>
      <Link href={'todos/create'}>
        <Button variant="outlined">글 작성하러 가기</Button>
      </Link>
    </div>
  );
}
