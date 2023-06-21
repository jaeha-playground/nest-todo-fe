import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    backgroundColor: 'green';
    redColor: 'red';
    backdropFilter: 'saturate(180%) blur(5px)';
  }
}

export const emotionTheme: Theme = {
  backgroundColor: 'green',
  redColor: 'red',
  backdropFilter: 'saturate(180%) blur(5px)',
};
