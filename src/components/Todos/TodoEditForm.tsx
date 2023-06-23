import { useUpdateTodoAPI } from '@/apis/todo';
import { TextareaAutosize } from '@mui/base';
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface ITodoEditForm {
  data: any;
}

export default function TodoEditForm({ data }: ITodoEditForm) {
  const router = useRouter();
  const [contentsTitle, setContentsTitle] = useState<string>(data.title);
  const [contentsBody, setContentsBody] = useState<string>(data.body);
  const [contentsStatus, setContentsStatus] = useState<string>(data.status);
  console.log(contentsTitle, contentsBody, contentsStatus);

  const onSuccess = (data: any) => {
    alert('업데이트 완료');
    console.log('data>>', data);
    router.push(`/todos/${data.id}`);
  };
  const onError = (err: Error) => {
    alert('업데이트 실패');
    console.error(err);
  };

  const { mutate } = useUpdateTodoAPI(data.id, { onSuccess, onError });

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
      <form onSubmit={handleSubmitPost}>
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
          편집 완료
        </Button>
      </form>
    </div>
  );
}
