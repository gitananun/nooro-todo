import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from './layout.module.scss';
import './globals.scss';
import { LayoutHeader } from './(layout)/_components/header/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nooro - Todo Assessment App',
  description: 'A todo assessment app for Nooro.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body} antialiased`}>
        <LayoutHeader />
        {children}
        </body>
    </html>
  );
}
