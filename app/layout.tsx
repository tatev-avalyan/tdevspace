// ✅ 1. Global styles
import './globals.css';
// ✅ 2. Third-party styles/libraries
import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
// ✅ 3. Next.js-specific utilities
import { Inter } from 'next/font/google';
// ✅ 4. Project-specific modules/components
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TDevSpace',
  description: 'Dynamic Learning for Future Developers | TDevSpace',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <div className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex flex-col overflow-hidden">
          
          {/* ✅ Animated Background */}
          <AnimatedBackground />

          {/* ✅ Content Overlay */}
          <Providers>
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 p-4">{children}</main>
              <Footer />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
