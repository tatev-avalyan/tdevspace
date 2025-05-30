'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from "../public/assets/logo.jpg";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'hy'>('en');

  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={Logo} alt="TDevSpace Logo" width={120} height={120} className="rounded-full object-cover" />
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {lang === 'en' ? 'Welcome to TDevSpace 🚀' : 'Բարի գալուստ TDevSpace 🚀'}
      </motion.h1>

      <motion.p
        className="max-w-xl text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {lang === 'en'
          ? 'Learn, build, and grow with expert mentorship, real projects, and modern tools.'
          : 'Սովորեք, ստեղծեք և զարգացեք՝ իրական նախագծերով և փորձառու աջակցությամբ։'}
      </motion.p>

      <div className="mt-4 flex gap-3 flex-wrap justify-center">
        <button onClick={() => setLang('en')} className={`px-4 py-2 text-sm sm:text-base rounded border ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-transparent dark:text-white'}`}>
          English
        </button>
        <button onClick={() => setLang('hy')} className={`px-4 py-2 text-sm sm:text-base rounded border ${lang === 'hy' ? 'bg-blue-500 text-white' : 'bg-transparent dark:text-white'}`}>
          Հայերեն
        </button>
      </div>
    </div>
  );
}
