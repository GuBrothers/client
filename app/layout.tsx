import './globals.css';

import { Nav } from '@/components/nav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '행정사 이민구',
  description: '행정사 이민구 홈페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="w-screen mx-auto max-w-6xl">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
