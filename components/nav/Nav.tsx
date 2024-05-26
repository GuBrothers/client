'use client';

import Link from 'next/link';
import React from 'react';

const routes = [
  { name: 'About', href: '/about' },
  {
    name: 'Blog',
    href: 'https://blog.naver.com/mingu_admattorney',
    target: '_blank',
  },
];

function Nav() {
  return (
    <nav className="w-screen h-20 flex justify-center items-center">
      <div className="w-full h-full max-w-6xl px-4 flex justify-between items-center">
        <div>logo</div>
        <div className="flex gap-2">
          {routes.map((route) => (
            <Link key={route.name} href={route.href} target={route?.target}>
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
