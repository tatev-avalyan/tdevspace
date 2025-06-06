'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const availableCourses = [
  'course.js.title',
  'course.react.title',
  'course.kids.title',
  'course.math.title'
];

const CourseApplyModal = ({ onClose, courseName }: { onClose: () => void; courseName?: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          {courseName ? t('apply.headingWithCourse') : t('apply.heading')}
        </h2>

        {submitted ? (
          <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-4 rounded-lg text-center">
            ✅ {t('apply.success')}
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xoqgllzy"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input type="hidden" name="subject" value={`${t('apply.subject')} - ${courseName || ''}`} />
            <input
              type="text"
              name="name"
              placeholder={t('apply.name')}
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('apply.email')}
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('apply.phone')}
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
            />
            {courseName ? (
              <input
                type="text"
                name="course"
                readOnly
                value={courseName}
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              />
            ) : (
              <select
                name="course"
                required
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <option value="">{t('apply.selectCourse')}</option>
                {availableCourses.map((course, index) => (
                  <option key={index} value={course}>{t(course)}</option>
                ))}
              </select>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-base py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              {t('apply.submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CourseApplyModal;
