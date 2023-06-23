'use client';

import React from 'react';
import Todo from '@/components/Todos/Todo';

interface IPage {
  params: {
    id: string;
  };
}

export default function page({ params }: IPage) {
  const { id } = params;
  console.log('id>>', id);

  return (
    <div>
      <h1>Todo 자세히 보기</h1>
      {id && <Todo id={parseInt(id)} />}
    </div>
  );
}
