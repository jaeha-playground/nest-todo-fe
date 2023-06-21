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
      <Link href={'todos/create'}>
        <Button variant="outlined">글 작성하러 가기</Button>
      </Link>
    </div>
  );
}
