'use client';
// ✅ 1. Third-party libraries
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// ✅ 2. Project-specific imports
import { cardVariants } from '@/animations/cardVariants';

const courses = [
  {
    titleKey: 'courses.js.title',
    descriptionKey: 'courses.js.description',
    slug: 'javascript-fundamentals',
  },
  {
    titleKey: 'courses.react.title',
    descriptionKey: 'courses.react.description',
    slug: 'react-redux-mastery',
  },
  {
    titleKey: 'courses.kids.title',
    descriptionKey: 'courses.kids.description',
    slug: 'web-dev-for-kids',
  },
  {
    titleKey: 'courses.math.title',
    descriptionKey: 'courses.math.description',
    slug: 'math-enrichment',
  },
];

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[75vh] max-w-5xl mx-auto py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark"
      >
        {t('courses.title')}
      </motion.h2>

      {/* ✅ Animated Grid Wrapper for Stagger */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {courses.map((course, i) => (
          <motion.div
            key={i}
            layout
            variants={cardVariants}
            className="relative group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 12px 28px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h3 className="text-xl font-semibold text-brand group-hover:text-brand-light transition-colors duration-200">
              {t(course.titleKey)}
            </h3>
            <p className="mt-3 text-sm dark:text-dark">
              {t(course.descriptionKey)}
            </p>
            <div className="mt-6">
              <Link href={`/courses/${course.slug}`}>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-light transition">
                  {t('courses.learnMore')}
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;
