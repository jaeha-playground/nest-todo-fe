'use client';

import React from 'react';
import { useGetSpecificTodoAPI } from '@/apis/todo';

import * as S from './index.styles';

interface ITodoId {
  id: number;
}

export default function Todo({ id }: ITodoId) {
  console.log('id>>', id);

  const { data, isPending } = useGetSpecificTodoAPI(id);

  if (isPending && !data) {
    return <div>loading...</div>;
  }
  console.log('data>>', data);

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <span>status: {data.status}</span>
      <span>생성 날짜: {data.createdAt}</span>
      <span>수정 날짜: {data.updatedAt}</span>
    </div>
  );
}
