'use client';
// ✅ 1. React core
import { useEffect, useState } from 'react';
// ✅ 2. Third-party libraries
import { ThemeProvider } from 'next-themes';
// ✅ 3. Framework-specific tools
import { AntdRegistry } from '@ant-design/nextjs-registry';
// ✅ 4. Project components
import LanguageHydrationProvider from '@/components/LanguageSwitcher/LanguageHydrationProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
      <AntdRegistry>
        <LanguageHydrationProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </LanguageHydrationProvider>
      </AntdRegistry>

  );
}

export default Providers;