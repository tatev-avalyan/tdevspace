'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: t('navbar.about'), href: '/about' },
    { label: t('navbar.courses'), href: '/courses' },
    { label: t('navbar.contact'), href: '/contact' },
  ];

  return (
    <header className="w-full px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          TDevSpace
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          {mounted && <ThemeToggle />}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex flex-col gap-6">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <X size={24} />
          </button>

          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}

          <div className="pt-2 flex items-center justify-start gap-4">
            <LanguageSwitcher />
            {mounted && <ThemeToggle />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
