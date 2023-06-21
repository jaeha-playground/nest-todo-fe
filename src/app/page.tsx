'use client';

import React, { useEffect } from 'react';
import { useMeAPI } from '@/apis/auth';

export default function page() {
  const { data, isLoading } = useMeAPI();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!isLoading && data) {
    console.log('data>>>', data);
  }

  return <div>page</div>;
}
