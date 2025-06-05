'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

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
    <div className="min-h-[75vh] max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark">
        {t('courses.title')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {courses.map((course, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-brand">
              {t(course.titleKey)}
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              {t(course.descriptionKey)}
            </p>
            <div className="mt-4">
              <Link href={`/courses/${course.slug}`}>
                <button className="inline-block px-4 py-2 text-sm rounded-md text-dark hover:bg-foreground-light transition">
                  {t('courses.learnMore')}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
