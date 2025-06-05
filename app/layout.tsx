import './globals.css';
import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/public/assets/background.png';
import Image from 'next/image';
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

          {/* ✅ Background Layer */}
          <Image
            src={Background} 
            alt="background"
            fill
            priority
            className="object-cover dark:opacity-10 pointer-events-none select-none z-0"
          />

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
