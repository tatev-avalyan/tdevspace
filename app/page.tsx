'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from "@/public/assets/logo.png";
import { useTranslation } from "react-i18next";
import AboutComponent from '@/components/About';
import CoursesComponent from '@/components/Courses';
import ContactComponent from '@/components/Contact';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FadeInUp from '@/components/FadeInUp';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <div className='min-h-[90vh] flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center space-y-10 max-w-5xl mx-auto'>
        {/* Logo */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={Logo}
            alt="TDevSpace Logo"
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t('home.title')} <span className="inline-block animate-bounce" role="img" aria-label="rocket">🚀</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-lg md:text-xl text-dark animate-fade-in delay-200">
          {t('home.subtitle')}
        </motion.p>
      </div>

      {/* Sections */}
      <FadeInUp>
        <AboutComponent />
      </FadeInUp>

      <FadeInUp>
        <CoursesComponent />
      </FadeInUp>

      <FadeInUp>
        <ContactComponent />
      </FadeInUp>

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
