import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trio Music Repository',
  description: 'Custom arrangements and compositions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-100 min-h-screen flex flex-col`}>
        {/* Shared Navbar */}
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-indigo-400 transition">
              Balls<span className="text-indigo-500">.</span>
            </Link>
            <div className="flex gap-6 text-sm font-medium text-slate-300">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/catalog" className="hover:text-white transition">Catalog</Link>
              <Link href="/about" className="hover:text-white transition">About Us</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="grow">
          {children}
        </div>

        {/* Simple Footer */}
        <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Our Music Collective. All rights reserved.
        </footer>
      </body>
    </html>
  );
}