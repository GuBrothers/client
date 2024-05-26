'use client';

import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav className="w-screen h-20 flex justify-center items-center">
      <div className="w-full h-full max-w-6xl px-4 flex justify-between items-center">
        <div>logo</div>
        <div className="flex gap-2">
          <Link href="/about">About</Link>
          <Link href="https://blog.naver.com/mingu_admattorney" target="_blank">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
