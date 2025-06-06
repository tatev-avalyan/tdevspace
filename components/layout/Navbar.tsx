'use client';
// ✅ 1. React core
import { useEffect, useState } from 'react';
// ✅ 2. Third-party libraries
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
// ✅ 3. Next.js utilities
import Link from 'next/link';
// ✅ 4. Internal components
import LanguageSwitcher from '@/components/ui/LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileSidebar from '@/components/layout/MobileSidebar';

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
    <header className="fixed top-0 left-0 w-full px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm z-50">
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

      {/* Animated Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <MobileSidebar
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            navItems={navItems}
            mounted={mounted}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
