import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
  pageContent?: ReactNode; // Optional: if provided, this will be the animated content
}

export default function Layout({ children, pageContent }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {pageContent || <main className="flex-grow">{children}</main>}
      <Footer />
    </div>
  );
}

