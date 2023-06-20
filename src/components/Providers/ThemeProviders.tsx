'use client';

import React from 'react';

import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { emotionTheme } from '@/styles/emotionTheme';

interface IProviders {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default function ThemeProviders({ children }: IProviders) {
  return (
    <EmotionThemeProvider theme={emotionTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionThemeProvider>
  );
}
