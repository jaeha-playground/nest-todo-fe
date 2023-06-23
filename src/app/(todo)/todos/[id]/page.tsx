'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Todo from '@/components/Todos/Todo';
import { Button } from '@mui/material';
import { useDeleteTodoAPI } from '@/apis/todo';
import { useRouter } from 'next/navigation';

interface IPage {
  params: {
    id: string;
  };
}

export default function page({ params }: IPage) {
  const router = useRouter();
  const [editTodo, setEditTodo] = useState<boolean>(false);
  const { id } = params;

  const onSuccess = (data: any) => {
    console.log('data>>', data);
    alert('삭제 완료');
    router.push('/todos');
  };

  const onError = (err: Error) => {
    console.error(err);
    alert('삭제 실패');
  };

  const { mutate } = useDeleteTodoAPI(parseInt(id), { onSuccess, onError });

  const handleDeleteTodo = () => {
    mutate(parseInt(id));
  };

  return (
    <div>
      <h1>Todo 자세히 보기</h1>
      {!editTodo && (
        <Link href={'/todos'}>
          <Button variant="outlined">글 전체보기</Button>
        </Link>
      )}
      {!editTodo && (
        <Link href={'/todos/create'}>
          <Button variant="outlined">글 작성하기</Button>
        </Link>
      )}

      <Button variant="outlined" onClick={() => setEditTodo(!editTodo)}>
        {editTodo ? '글 편집모드' : '글 편집하기'}
      </Button>

      {!editTodo && (
        <Button variant="outlined" onClick={handleDeleteTodo}>
          글 삭제하기
        </Button>
      )}
      {id && (
        <Todo id={parseInt(id)} editTodo={editTodo} setEditTodo={setEditTodo} />
      )}
    </div>
  );
}
