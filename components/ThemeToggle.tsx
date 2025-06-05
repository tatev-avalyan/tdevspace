"use client";
// ✅ 1. React core
import { useEffect, useState } from "react";
// ✅ 2. Next.js-specific hooks or libraries
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
  closeMobileMenu?: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "", closeMobileMenu }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <button
      onClick={toggleTheme}
      className={`px-2 py-1 rounded border border-gray-300 dark:border-gray-600 ${className}`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
