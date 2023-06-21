'use client';

import React, { useReducer } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

import { Button, TextField } from '@mui/material';
import { useJoinAPI } from '@/apis/auth';
import { LoadingButton } from '@mui/lab';

import * as A from '@/styles/auth.styles';

type State = {
  email: string;
  nickname: string;
  password: string;
  error: any | null;
};

type Action =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_NICKNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_ERROR'; payload: Error | null };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_NICKNAME':
      return { ...state, nickname: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function page() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    nickname: '',
    password: '',
    error: null,
  });
  console.log('state>>>', state);

  const onError = (err: any) => {
    console.error(err);
    dispatch({
      type: 'SET_ERROR',
      payload: err?.response?.data?.data,
    });
  };
  const onSuccess = (data: any) => {
    console.log('success>>', data);
    alert('회원가입 성공. 로그인 페이지로 이동합니다.');
    router.push('/login');
  };

  const { mutate, isPending } = useJoinAPI({ onSuccess, onError });

  const handleJoinSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      email: state.email,
      nickname: state.nickname,
      password: state.password,
    });
  };

  console.log('state.error>>', state.error);

  return (
    <A.Wrapper>
      <Navbar />
      <A.MainWrapper>
        <h2>Create Your Account</h2>
        <form onSubmit={handleJoinSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'SET_EMAIL', payload: e.target.value })
            }
          />
          <TextField
            label="Nickname"
            variant="outlined"
            value={state.nickname}
            onChange={(e) =>
              dispatch({ type: 'SET_NICKNAME', payload: e.target.value })
            }
          />
          <TextField
            label="Password"
            variant="outlined"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
            }
          />
          {state.error}
          {isPending ? (
            <LoadingButton loading variant="outlined">
              Submit
            </LoadingButton>
          ) : (
            <Button variant="outlined" size="medium" type="submit">
              제출
            </Button>
          )}
        </form>
      </A.MainWrapper>
    </A.Wrapper>
  );
}
