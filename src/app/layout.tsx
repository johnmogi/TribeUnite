import "./globals.css";
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

// Import metadata
import siteMetadata from './metadata';

// Load fonts with the new approach
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  fallback: ['monospace'],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <body className="antialiased bg-slate-950 text-slate-100">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
