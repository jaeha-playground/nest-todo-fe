'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import TextareaAutosize from '@mui/base/TextareaAutosize';
import Editor from '@/components/Editor';
import { useCreateTodoAPI } from '@/apis/todo';

export default function page() {
  const [contentsTitle, setContentsTitle] = useState<string>('');
  const [contentsBody, setContentsBody] = useState<string>('');
  const [contentsStatus, setContentsStatus] = useState<string>('TODO');

  const onSuccess = (data: any) => {
    alert('create 성공');
    console.log('data>>', data);
  };
  const onError = (err: Error) => {
    alert('create 실패');
    console.error(err);
  };

  const { mutate } = useCreateTodoAPI({ onSuccess, onError });

  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      title: contentsTitle,
      body: contentsBody,
      status: contentsStatus,
    });
  };

  const handleStatusChange = (e: SelectChangeEvent) => {
    console.log(e.target.value);

    setContentsStatus(e?.target.value as string);
  };

  return (
    <div>
      <h1>글 작성</h1>
      <Link href={'/todos/edit'}>
        <Button variant="outlined">글 편집하기</Button>
      </Link>
      <form onSubmit={handleSubmitPost}>
        {/* <Editor /> */}
        {/* title */}
        <input
          type="text"
          value={contentsTitle}
          onChange={(e) => setContentsTitle(e.target.value)}
        />
        {/* body */}
        <TextareaAutosize
          minRows={3}
          placeholder="Minimum 3 rows"
          value={contentsBody}
          onChange={(e) => setContentsBody(e.target.value)}
        />
        {/* status select */}
        <InputLabel>Status</InputLabel>
        <Select
          value={contentsStatus}
          label="Status"
          onChange={handleStatusChange}
        >
          <MenuItem value="TODO">할 일</MenuItem>
          <MenuItem value="IN_PROGRESS">진행중</MenuItem>
          <MenuItem value="DONE">완료</MenuItem>
        </Select>
        <Button variant="outlined" type="submit">
          작성 완료
        </Button>
      </form>
    </div>
  );
}
