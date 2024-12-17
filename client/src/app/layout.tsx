import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { LayoutHeader } from './(layout)/_components/header/header';
import './globals.scss';
import styles from './layout.module.scss';
import StoreProvider from './store-provider';

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body} antialiased`}>
        <StoreProvider>
          <LayoutHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
