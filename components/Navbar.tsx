'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          TDevSpace
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 px-2 py-1 rounded border"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar from right */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 p-6 flex flex-col gap-6">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <X size={24} />
          </button>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                setIsOpen(false);
              }}
              className="px-4 py-2 border rounded"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
