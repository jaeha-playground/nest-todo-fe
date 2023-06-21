'use client';

import React, { useReducer } from 'react';
import Navbar from '@/components/Navbar';

import * as A from '@/styles/auth.styles';
import { Button, TextField } from '@mui/material';
import { useLoginAPI } from '@/apis/auth';
import { useRouter } from 'next/navigation';

type State = {
  email: string;
  password: string;
  error: any | null;
};

type Action =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_ERROR'; payload: Error | null };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
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
    password: '',
    error: null,
  });

  const onSuccess = (data: any) => {
    console.log('로그인 성공>>', data);
    router.push('/');
  };
  const onError = (err: any) => {
    console.error('로그인 실패>>', err);
    dispatch({
      type: 'SET_ERROR',
      payload: err?.response?.data?.data,
    });
    alert('로그인 실패');
  };

  const { mutate } = useLoginAPI({ onSuccess, onError });

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      email: state.email,
      password: state.password,
    });
  };

  return (
    <A.Wrapper>
      <Navbar />
      <A.MainWrapper>
        <h2>Create Your Account</h2>
        <form onSubmit={handleLoginSubmit}>
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
            value={state.password}
            onChange={(e) =>
              dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
            }
          />
          {state.error && 'something went wrong'}
          <Button variant="outlined" size="medium" type="submit">
            제출
          </Button>
        </form>
      </A.MainWrapper>
    </A.Wrapper>
  );
}
