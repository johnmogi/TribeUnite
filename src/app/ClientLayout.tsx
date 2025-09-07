'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import client components with no SSR
const Header = dynamic(() => import('./_components/Header'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-slate-900 w-full" />
});

const Footer = dynamic(() => import('./_components/Footer'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-slate-900 w-full" />
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </Suspense>
  );
}
