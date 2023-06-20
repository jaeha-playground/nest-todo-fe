import React from 'react';
import Image from 'next/image';
import home from 'public/home.svg';
import wordmark from 'public/wordmark.svg';

import * as A from '@/styles/auth.styles';

export default function Navbar() {
  return (
    <A.Container>
      <Image
        priority={true}
        src={wordmark}
        width={100}
        height={30}
        alt="vercel logo"
      />
      123
    </A.Container>
  );
}
