import React, { useState } from 'react';
import { axiosInstance } from '@/apis/config';
import { useQuery } from '@tanstack/react-query';

import * as S from './index.styles';
import { Pagination, Stack } from '@mui/material';
import Link from 'next/link';

export default function TodoLists() {
  const [page, setPage] = useState(1);

  const queryKey = `/todos/all?page=${page - 1}`;
  const fetchOwnTodos = async (page = 0) => {
    try {
      const { data } = await axiosInstance.get(queryKey);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchOwnTodos(page),
  });

  if (isLoading && !data) {
    return <div>loading...</div>;
  }
  console.log('data>>>', data);

  return (
    <S.Container>
      <Stack>
        <Pagination count={10} shape="rounded" size="small" />
      </Stack>
      {data?.map((todo: any, index: number) => {
        const { id, title, body, status, createdAt, updatedAt, images } = todo;
        console.log(todo);

        return (
          <S.TodoWrapper key={`todo${id}`}>
            <Link href={`/todos/${id}`}>
              <h2>{title}</h2>
              <p>{body}</p>
              <span>status: {status}</span>
              <span>생성 날짜: {createdAt}</span>
              <span>수정 날짜: {updatedAt}</span>
            </Link>
          </S.TodoWrapper>
        );
      })}
    </S.Container>
  );
}
