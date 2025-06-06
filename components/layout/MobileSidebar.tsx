'use client';

// ✅ 1. Third-party libraries
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
// ✅ 2. Internal components
import LanguageSwitcher from '@/components/ui/LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';
// ✅ 3. Animations / utilities
import { sidebarVariants } from '@/animations/sidebarVariants';

interface MobileSidebarProps {
  isOpen?: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  mounted: boolean;
}

const MobileSidebar = ({  onClose, navItems, mounted }: MobileSidebarProps) => {
  return (
    <motion.div
      key="sidebar"
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarVariants}
      className="fixed top-0 right-0 h-full w-64 bg-gray-100 dark:bg-gray-800 shadow-xl z-50 px-4 py-3 flex flex-col gap-6 overflow-hidden"
    >
      <button onClick={onClose} className="self-end">
        <X size={24} />
      </button>

      {navItems.map((item) => (
        <Link key={item.href} href={item.href} onClick={onClose}>
          {item.label}
        </Link>
      ))}

      <div className="pt-2 flex items-center justify-start gap-4">
        <LanguageSwitcher />
        {mounted && <ThemeToggle />}
      </div>
    </motion.div>
  );
};

export default MobileSidebar;
