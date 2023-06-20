import React, { ReactNode } from 'react';

interface IAuthLayout {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return <div>{children}</div>;
}
