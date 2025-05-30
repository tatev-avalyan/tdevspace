import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TDevSpace',
  description: 'Dynamic Learning for Future Developers | TDevSpace',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
        <Providers>
          <Navbar />
          <main className="min-h-[80vh] p-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
