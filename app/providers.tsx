'use client';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LanguageHydrationProvider from "@/components/LanguageSwitcher/LanguageHydrationProvider";

function DebugTheme() {
  const { theme } = useTheme();
  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
      <AntdRegistry>
        <LanguageHydrationProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <DebugTheme />
            {children}
          </ThemeProvider>
        </LanguageHydrationProvider>
      </AntdRegistry>

  );
}